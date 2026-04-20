const fs = require('fs')
const readline = require('readline')

const inputStream = fs.createReadStream('src/fonts/fonts.css')
const outputStream = fs.createWriteStream('src/fonts/fonts-embed.css')

const rl = readline.createInterface({
  input: inputStream,
  crlfDelay: Infinity
})

const reg = /^(.+url\(')(.+)('\) format\(')(.+)('\);)$/

rl.on('line', function (line: string) {
  const match = line.match(reg)
  if (!match) {
    outputStream.write(line + '\n')
  } else {
    const file = match[2]
    const bitmap = fs.readFileSync('src/fonts/' + file)
    const converted = Buffer.from(bitmap).toString('base64')
    outputStream.write(
      match[1] +
        'data:application/x-font-ttf;charset=utf-8;base64,' +
        converted +
        match[3] +
        match[4] +
        match[5] +
        '\n'
    )
  }
})
