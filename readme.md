# Remark Capitalize

Transform all markdown titles with [title.sh](https://github.com/zeit/title)

## Getting started

```
npm install --save remark-capitalize
```

### Usage with MDX

[mdx](https://github.com/mdx-js/mdx) uses remark to transform an MDX document into JSX tags. It has support for passing plugins through the loader options:

```js
const remarkCapitalize = require('remark-capitalize')
// part of webpack.config.js
{
  test: /\.mdx$/,
  use: [
    defaultLoaders.babel,
    {
      loader: '@compositor/markdown-loader',
      options: {
        plugins: [remarkCapitalize]
      }
    }
  ]
}
```
