import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Butter from 'buttercms'
import { Card, Container } from 'semantic-ui-react'
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
      console.log('ButterCMS Posts: ', response)
      this.setState({
        loaded: true,
        response: response.data,
      })
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    const { location } = this.props

    if (this.state.loaded) {
      return (
        <Layout location={location} color={'#f0f8ff'}>
          <Container
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            {this.state.response.data.map(post => {
              return (
                <Card>
                  <Card.Header>{post.title}</Card.Header>
                  <Card.Content>{post.description}</Card.Content>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />{' '}
                </Card>
              )
            })}
          </Container>
        </Layout>
      )
    } else {
      return <div>Loading.............</div>
    }
  } //end render
} //end class

export default Gists
