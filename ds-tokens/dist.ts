import StyleDictionary from 'style-dictionary'
import { buildTailwindConfig } from './build-tailwind'

const CDSDictionary = StyleDictionary.extend('./config.js')

const build = async () => {
  await CDSDictionary.buildAllPlatforms()
  buildTailwindConfig()
}

build()
