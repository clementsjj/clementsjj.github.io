---
title: Welcome
date: '2018-10-24'
cat: 'blog'
---

---

This is the first blog post.
It's a beautiful thing.
Below is some information about running Gatsby.

##### Terminal

```shell
gatsby new mysite https://github.com/gatsbyjs/gatsby-starter-default
cd mysite
npm i bootstrap jquery popper.js
touch src/components/main.css
mkdir src/templates
touch blog-post.js
```

##### Install Dependencies

```shell
npm i gatsby-source-filesystem gatsby-transformer-remark
```

##### gatsby-config.js

```js
plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'src',
      path: `${__dirname}/src/`,
    },
  },
]
```

##### gatsby-node.js

```js
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    // const fileNode = getNode(node.parent);
    // console.log(`\n`, fileNode.relativePath);
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}
```

##### In templates/blog-post.js

```js
import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div
      style={{
        color: 'black',
      }}
    >
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
```

##### In main.css

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

##### In layout.js: `import './main.css'`

##### In div properties, add `classname="container"`
