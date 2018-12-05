import React from 'react'
import Layout from '../components/layout'
import { Grid, Segment } from 'semantic-ui-react'
import HomebodyTwo from '../components/Homebody/HomebodyTwo'
import { DiscussionEmbed } from 'disqus-react'

export default ({ data, location }) => {
  const post = data.markdownRemark
  //const disqusShortname = 'clementsjj.disqus.com'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout location={location} color={'#f0f8ff'}>
      <Grid container>
        <Grid.Column>
          <Segment>
            {/* <div
          style={{
            padding: '2rem 5rem',
            margin: 0,
            width: '100%',
            backgroundColor: 'white',
            color: 'black',
          }}
        > */}
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* </div> */}

            {/* This is the code for bypassing the Gatsby build */}
            {/* {typeof window !== 'undefined' &&
            window.location.pathname === '/about-this-site/' ? (
              <HomebodyTwo />
            ) : (
              'Nothing to Display'
            )} */}
          </Segment>
          <DiscussionEmbed shortname="clementsjj" config={disqusConfig} />
        </Grid.Column>
      </Grid>
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
