import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: {
    css: 'prettier', // by default use Prettier
    html: 'prettier', // by default use Prettier
    toml: 'dprint', // use dprint for TOML
    markdown: 'prettier', // use prettier for markdown
  },
}).removeRules('no-console')
