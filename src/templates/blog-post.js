import React from 'react'
import Layout from '../components/layout'

export default ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <div
        style={{
          padding: '2rem 5rem',
          margin: 0,
          width: '100%',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
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
