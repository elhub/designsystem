import fs from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'

interface FigmaIconResponse {
  nodes: Record<
    string,
    {
      document: {
        children: Array<{
          id: string
          name: string
          children: Array<{
            id: string
            name: string
          }>
        }>
      }
    }
  >
}

interface FigmaImagesResponse {
  images: Record<string, string>
}

const figmaFileId = 'UVNmJfoSHUs2uxVmhVekQP'
const figmaIconsId = '257:563'
const iconsPathFromRoot = 'ds-icons/src/icons'

const figma = async <T>(endpoint: string): Promise<T> => {
  if (!process.argv[2]) {
    throw new Error('Figma token not provided, add it as an argument')
  }

  const response = await fetch(`https://api.figma.com/v1/${endpoint}`, {
    headers: {
      'X-Figma-Token': process.argv[2]
    }
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}

const exportIcons = (): void => {
  execSync(
    `npm exec svgr -- \
      --typescript \
      --no-dimensions \
      --template "src/extract/template.cjs" \
      --index-template "src/extract/indexTemplate.cjs" \
      --ref \
      --svgo-config "svgo.config.cjs" \
      --out-dir src/icons \
      ../${iconsPathFromRoot}/svg`
  )
}

const toTitleCase = (str: string): string => {
  return str
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
    .replace(/\s/g, '')
}

void (async () => {
  const iconsRes = await figma<FigmaIconResponse>(`files/${figmaFileId}/nodes?ids=${figmaIconsId}`).catch(
    (err) => console.error(`Failed to fetch nodes: ${err.message} (${err.status ?? 'Unknown status'})`)
  )

  if (!iconsRes?.nodes) {
    return
  }

  const nodes = iconsRes.nodes[figmaIconsId]?.document.children[0].children ?? []

  const icons: { id: string; name: string }[] = nodes.map((node) => {
    const name = node.name.split('/')

    const baseName = toTitleCase(name[name.length - 1] ?? '')
    const namePrefix = 'Icon'

    return {
      id: node.id,
      name: namePrefix + baseName
    }
  })

  const iconIds = icons.map((icon) => icon.id).join(',')
  const filesRes = await figma<FigmaImagesResponse>(`images/${figmaFileId}?ids=${iconIds}&format=svg`).catch(
    (err) => console.error(`Failed to fetch files: ${err.message} (${err.status ?? 'Unknown status'})`)
  )

  const images = filesRes?.images

  if (!images) {
    return
  }

  const rootPath = execSync('git rev-parse --show-toplevel').toString().trim()

  const iconsFolder = path.join(rootPath, iconsPathFromRoot)
  const svgFolder = path.join(iconsFolder, 'svg')

  fs.mkdirSync(svgFolder, { recursive: true })

  // Write SVG files
  await Promise.all(
    Object.entries(images).map(async ([imageId, imageUrl]) => {
      const matchingIcon = icons.find((icon) => icon.id === imageId)

      if (!matchingIcon?.name) {
        console.warn(`No matching icon found for image ID: ${imageId}`)
        return
      }

      // Fetch the image as SVG from the Figma API
      const imageRes = await fetch(imageUrl)
        .then((res) => res.text())
        .catch((err: Error) => console.error(`Failed to fetch image: ${err.message}`))

      if (!imageRes) return
      // Write to ds-icons/src/icons/svg/Icon.svg
      const filePath = path.join(svgFolder, `${matchingIcon.name.trim()}.svg`)
      fs.writeFileSync(filePath, imageRes)
    })
  )

  // Write TSX files
  exportIcons()
  execSync(`rm ${iconsFolder}/**/*.svg`)
})()
