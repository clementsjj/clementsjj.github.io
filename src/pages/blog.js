import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { Grid, Segment, Responsive } from 'semantic-ui-react'

const style = {
  textDecoration: 'none',
  color: 'black',
}

export default ({ data, location }) => {
  return (
    <Layout location={location} color={'#f0f8ff'}>
      <Grid container>
        <Grid.Column computer={4} mobile={16}>
          <Responsive as={Segment} minWidth={768}>
            Placeholder
          </Responsive>
          {/* <Segment>Placeholder</Segment> */}
        </Grid.Column>
        <Grid.Column computer={12} mobile={16}>
          <Segment>
            {/* <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: '1.45rem',
              border: '1px solid black',
            }}
          > */}
            <h1>Blog</h1>
            {/* <hr /> */}
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            <hr style={{ width: '20%' }} />
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <Link
                key={index}
                to={node.fields.slug}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h3>{node.frontmatter.title}</h3>
                <p>
                  <span>
                    <em>- {node.frontmatter.date}</em>
                  </span>
                </p>
                <p>{node.excerpt}</p>
              </Link>
            ))}
            {/* </div> */}
          </Segment>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
