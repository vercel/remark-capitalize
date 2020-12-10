# Remark Capitalize

Transform all markdown titles with [title.sh](https://github.com/zeit/title)

## Getting started

```
npm install --save remark-capitalize
```

### Usage with Markdown

Works as a remark plugin with either [unified](https://www.npmjs.com/package/unified) or [remark](https://www.npmjs.com/package/remark).

#### Without options

```js
import unified from 'unified'
import markdown from 'remark-parse'
import capitalize from 'remark-capitalize'
import html from 'remark-html'

const processedContent = await unified()
        .use(markdown)
        .use(capitalize)
        .use(html)
        .process(content)
```

#### With Options

```js
import unified from 'unified'
import markdown from 'remark-parse'
import capitalize from 'remark-capitalize'
import html from 'remark-html'

// Your casing will be enforced for these words
const options = ['iPhone', 'facebook', 'sOmeRanDOMcaSEDtiTle']

const processedContent = await unified()
        .use(markdown)
        .use(capitalize, { options })
        .use(html)
        .process(content)
```

### Usage with MDX

[mdx](https://github.com/mdx-js/mdx) uses remark to transform an MDX document into JSX tags. It has support for passing plugins through the loader options:

#### Without options

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

#### With Options

```js
// Your casing will be enforced for these words
const options = ['iPhone', 'facebook', 'sOmeRanDOMcaSEDtiTle']

const remarkCapitalize = require('remark-capitalize')
// part of webpack.config.js
{
  test: /\.mdx$/,
  use: [
    defaultLoaders.babel,
    {
      loader: '@compositor/markdown-loader',
      options: {
        plugins: [
        [remarkCapitalize, {options}]
        ]
      }
    }
  ]
}
```
