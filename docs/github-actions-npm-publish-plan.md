# Plan: GitHub Actions publish to npm

Publish `@elhub/ds-tokens`, `@elhub/ds-icons`, `@elhub/ds-css`, and `@elhub/ds-components` to the **public npm registry** via GitHub Actions, while keeping the existing **TeamCity → JFrog** pipeline completely untouched.

---

## How it works (key insight)

`npm publish --registry <url>` overrides `publishConfig.registry` in `package.json` at the highest precedence level. Likewise, `npm install --registry <url>` overrides the JFrog URL set in the project `.npmrc`. No existing files need to be changed except:

1. `.github/workflows/release.yml` — complete the incomplete stub
2. Root `package.json` — add a `publish:npm` script

The TC pipeline uses `.tc.npmrc` via `NPM_CONFIG_USERCONFIG` and is entirely isolated from the GHA workflow.

---

## Prerequisites (one-time)

Add a repository secret in **GitHub → Settings → Secrets and variables → Actions**:

| Secret name | Value |
|---|---|
| `NPM_TOKEN` | An npm access token with publish rights to the `@elhub` org |

---

## File 1 — Root `package.json`

Add a `publish:npm` script that publishes the four packages to npm in dependency order, bypassing `publishConfig.registry` and the changeset `"access": "restricted"` setting:

```json
"publish:npm": "npm publish -w @elhub/ds-tokens --registry https://registry.npmjs.org/ --access public && npm publish -w @elhub/ds-icons --registry https://registry.npmjs.org/ --access public && npm publish -w @elhub/ds-css --registry https://registry.npmjs.org/ --access public && npm publish -w @elhub/ds-components --registry https://registry.npmjs.org/ --access public"
```

`--access public` is needed because the changeset config has `"access": "restricted"`.

Order matters: `ds-tokens` → `ds-icons` → `ds-css` → `ds-components`.

---

## File 2 — `.github/workflows/release.yml`

Replace the incomplete stub with the full workflow:

```yaml
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'
          scope: '@elhub'

      - name: Install Dependencies
        run: npm install --registry https://registry.npmjs.org/
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Build packages
        run: |
          npm run build -w @elhub/ds-tokens
          npm run build -w @elhub/ds-icons
          npm run build -w @elhub/ds-css
          npm run build -w @elhub/ds-components

      - name: Create Release Pull Request or Publish to npm
        uses: changesets/action@v1
        with:
          publish: npm run publish:npm
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Why each step is written this way

| Step | Reason |
|---|---|
| `fetch-depth: 0` | Changesets needs full git history to generate changelogs and detect changed packages |
| `registry-url` + `scope` on setup-node | Writes `//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}` into the runner's `.npmrc`, enabling authenticated publish |
| `--registry` on `npm install` | The project `.npmrc` points to JFrog. The `--registry` CLI flag overrides it; all external packages (`react`, `clsx`, etc.) are available on public npm |
| `permissions: contents: write, pull-requests: write` | Required by `changesets/action` to push version bumps and open PRs |
| `changesets/action@v1` | Handles the full release flow: opens a "Version Packages" PR when changesets are detected, then publishes on merge |

---

## How the workflow behaves day-to-day

1. **Add changeset** — run `npm run changeset` locally, commit the generated `.changeset/*.md` file, push/merge to `main`
2. **GHA opens PR** — the action creates/updates a "Version Packages" PR that bumps versions and updates changelogs
3. **Merge the PR** — GHA detects no pending changesets, runs `publish:npm`, and the four packages are published to npm
4. **TC runs in parallel** — unaffected; continues to publish to JFrog using `.tc.npmrc`

---

## Important consideration: git tag ownership

Both `changesets/action` (GHA) and TC's `changeset publish` create git tags for each released version. If both pipelines run on the same push, one will fail trying to push an existing tag.

**Recommended fix**: add `--no-git-tag` to the TC publish command so that GHA owns all git tags:

```
# In TC build configuration (publish step)
NPM_CONFIG_USERCONFIG=./.tc.npmrc changeset publish --no-git-tag
```

If TeamCity is not currently creating tags (or tags are not used in the TC workflow), this can be ignored.

---

## Packages published to each registry

| Package | JFrog (TeamCity) | npm (GitHub Actions) |
|---|---|---|
| `@elhub/ds-tokens` | ✅ | ✅ |
| `@elhub/ds-icons` | ✅ | ✅ |
| `@elhub/ds-css` | ✅ | ✅ |
| `@elhub/ds-components` | ✅ | ✅ |
| `@elhub/ds-graph` | ✅ | ❌ (not requested) |
| `@elhub/ds-www` | ❌ (excluded in changeset config) | ❌ |

---

## Verification checklist

- [ ] `NPM_TOKEN` secret added to GitHub repo
- [ ] Merge a PR that contains a `.changeset/*.md` file → confirm GHA opens a "Version Packages" PR
- [ ] Merge the version PR → confirm GHA publishes to npm (`npm view @elhub/ds-tokens` shows the new version)
- [ ] Confirm TC pipeline still runs and publishes to JFrog unchanged
- [ ] Install `@elhub/ds-css` in a clean project from npm and confirm `@elhub/ds-tokens` resolves correctly
