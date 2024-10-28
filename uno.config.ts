import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  rules: [],
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      cdn: 'https://esm.sh/',
    }),
  ],
  transformers: [
    // transformerVariantGroup(),
  ],
})
