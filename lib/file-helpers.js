import fs from 'fs'
import path from 'path'

const IMG_DIR = process.env.localPaths.habitats;
const directory = path.join(process.cwd(), IMG_DIR);

export function getHabitatImages(){
  var files = fs.readdirSync(directory);

  return files.map(file => {
    const name = file.replace(/\.jpg$/, '')
    return {
      name: name,
      src: `${directory}${file}`
    }
  })
}