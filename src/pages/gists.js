import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Butter from 'buttercms'
import { Card, Container, Tab, Grid, Segment } from 'semantic-ui-react'
const butter = Butter('5e4558fe4e0400477fda1dfed305974d4c5aff01')

class Gists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
    this.fetchPosts = this.fetchPosts.bind(this)
  } //end constructor

  fetchPosts() {
    butter.post.list({ page: 1, page_size: 10 }).then(response => {
      console.log('ButterCMS Posts: ', response.data.data)
      let data = response.data
      console.log('~~~', data)
      this.setState(
        {
          loaded: true,
          response: data,
        },
        () => {
          console.log('Posts in State: ', this.state.response.data)
        }
      )
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    const { location } = this.props

    const panes = [
      {
        menuItem: 'React',
        render: () => (
          <Grid>
            <Grid.Row>
              {this.state.response.data.map((post, i) => {
                console.log('POST: ', post)
                if (post.tags[0].name == 'React') {
                  return (
                    //   <Grid.Column>
                    <Card style={{ margin: 0 }}>
                      <Card.Header>{post.title}</Card.Header>
                      <Card.Content>
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                      </Card.Content>
                    </Card>
                    //   </Grid.Column>
                  )
                }
              })}
            </Grid.Row>
          </Grid>
        ),
      },
      {
        menuItem: 'Node.js',
        render: () => (
          <Grid>
            <Grid.Row>
              {this.state.response.data.map((post, i) => {
                if (post.tags[0].name == 'Node') {
                  return (
                    <Card style={{ margin: 0 }}>
                      <Card.Header>{post.title}</Card.Header>
                      <Card.Content>
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                      </Card.Content>
                    </Card>
                  )
                }
              })}
            </Grid.Row>
          </Grid>
        ),
      },
    ]

    return (
      <Layout location={location} color={'#f0f8ff'}>
        <Container
          style={{ margin: 10, display: 'flex', justifyContent: 'center' }}
        >
          <Segment style={{ backgroundColor: 'transparent' }}>
            <h4>JJ's Gists </h4>
          </Segment>
        </Container>
        {this.state.loaded ? (
          <Container>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Container>
        ) : (
          <div>Loading...........................</div>
        )}
      </Layout>
    )
  } //end render
} //end class

export default Gists
