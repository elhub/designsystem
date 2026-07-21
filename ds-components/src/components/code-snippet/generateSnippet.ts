export type Language = 'curl' | 'http' | 'java' | 'javascript' | 'python'

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: 'curl', label: 'cURL' },
  { value: 'http', label: 'HTTP' },
  { value: 'java', label: 'Java' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' }
]

const formatHeaders = (
  headers: Record<string, string>,
  template: (key: string, value: string) => string,
  separator: string
): string =>
  Object.entries(headers)
    .map(([k, v]) => template(k, v))
    .join(separator)

export function generateSnippet(url: string, headers: Record<string, string>, language: Language): string {
  const { host, pathname, search } = new URL(url)
  const hasHeaders = Object.keys(headers).length > 0

  switch (language) {
    case 'curl': {
      const flags = formatHeaders(headers, (k, v) => `-H "${k}: ${v}"`, ' ')
      return `curl -X GET "${url}"${flags ? ` ${flags}` : ''}`
    }

    case 'http': {
      const lines = formatHeaders(headers, (k, v) => `${k}: ${v}`, '\n')
      return `GET ${pathname}${search} HTTP/1.1\nHost: ${host}${lines ? `\n${lines}` : ''}`
    }

    case 'java': {
      const setters = formatHeaders(
        headers,
        (k, v) => `conn.setRequestProperty("${k}", "${v}");`,
        '\n        '
      )
      return `import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        URL url = new URL("${url}");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        ${setters ? `${setters}\n        ` : ''}conn.connect();

        int responseCode = conn.getResponseCode();
        if (responseCode != 200) {
            throw new RuntimeException("HttpResponseCode: " + responseCode);
        } else {
            Scanner sc = new Scanner(url.openStream());
            while (sc.hasNext()) {
                System.out.println(sc.nextLine());
            }
            sc.close();
        }
    }
}`
    }

    case 'javascript': {
      const entries = formatHeaders(headers, (k, v) => `    '${k}': '${v}'`, ',\n')
      return `fetch('${url}'${hasHeaders ? `, {\n  headers: {\n${entries}\n  }\n}` : ''})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))`
    }

    case 'python': {
      const entries = formatHeaders(headers, (k, v) => `    '${k}': '${v}'`, ',\n')
      return `import requests
${hasHeaders ? `\nheaders = {\n${entries}\n}\n\n` : '\n'}response = requests.get('${url}'${hasHeaders ? ', headers=headers' : ''})
if response.status_code == 200:
    print(response.json())
else:
    print('Error:', response.status_code)`
    }
  }
}
