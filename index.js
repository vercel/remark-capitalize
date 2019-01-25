const title = require('title')
const visit = require('unist-util-visit')

module.exports = (options) => () => (tree, file) => {
  visit(tree, 'heading', node => {
    visit(node, 'text', textNode => {
      const text = textNode.value ? textNode.value.trim() : ''  
      textNode.value = title(text, options)
    })
  })
}
