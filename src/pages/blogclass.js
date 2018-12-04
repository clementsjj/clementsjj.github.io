import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import {
  Grid,
  Segment,
  Responsive,
  Divider,
  Container,
  Button,
  Menu,
} from 'semantic-ui-react'

class blogclass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedView: 'Programming',
      activeItem: 'Programming',
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
  }

  handleCategoryClick(e, { name }) {
    //console.log('Value= ', e.target.value)
    // console.log('Value= ', value)
    let value = e.target.value
    this.setState({ selectedView: value, activeItem: name })
  }

  render() {
    const { location, data } = this.props
    const programmingData = data.Programming.edges
    const allData = data.All.edges

    //console.log('Data: ', data)
    //console.log('Location: ', location)
    console.log('All Data ', data.All)
    console.log('Programming Data ', data.Programming)
    const style = {
      textDecoration: 'none',
      color: 'black',
    }

    return (
      <div>
        <Layout location={location} color={'#f0f8ff'}>
          <Grid container>
            <Grid.Column computer={4} mobile={16}>
              <Responsive as={Container} minWidth={768}>
                <Container
                  textAlign="center"
                  style={{
                    marginTop: '2.5rem',
                  }}
                >
                  <Menu fluid vertical tabular>
                    <Menu.Item
                      name="All"
                      active={this.state.activeItem === 'All'}
                      onClick={this.handleCategoryClick}
                    />
                    {data.All.edges.map(({ node }, index) => {
                      if (node.frontmatter.cat !== 'page') {
                        return (
                          <Menu.Item
                            name={node.frontmatter.cat}
                            active={
                              this.state.activeItem === node.frontmatter.cat
                            }
                            onClick={this.handleCategoryClick}
                          />
                        )
                      }
                    })}
                  </Menu>
                </Container>
              </Responsive>
            </Grid.Column>

            <Grid.Column computer={12} mobile={16}>
              <Container style={{ marginTop: '2.5rem' }}>
                {this.state.activeItem == 'Programming' &&
                  programmingData.map(({ node }, index) => (
                    <React.Fragment>
                      <Link key={index} to={node.fields.slug}>
                        <div>
                          <h3 style={{ display: 'inline' }}>
                            {node.frontmatter.title}
                          </h3>
                          &nbsp;
                          <p style={{ display: 'inline' }}>
                            <em>
                              &nbsp;-&nbsp;
                              {node.frontmatter.date}
                            </em>
                          </p>
                        </div>
                        <br />
                        <p>{node.excerpt}</p>
                      </Link>
                      <Divider />
                    </React.Fragment>
                  ))}
                {this.state.activeItem == 'All' &&
                  allData.map(({ node }, index) => (
                    <React.Fragment>
                      <Link key={index} to={node.fields.slug}>
                        <div>
                          <h3 style={{ display: 'inline' }}>
                            {node.frontmatter.title}
                          </h3>
                          &nbsp;
                          <p style={{ display: 'inline' }}>
                            <em>
                              &nbsp;-&nbsp;
                              {node.frontmatter.date}
                            </em>
                          </p>
                        </div>
                        <br />
                        <p>{node.excerpt}</p>
                      </Link>
                      <Divider />
                    </React.Fragment>
                  ))}
              </Container>
            </Grid.Column>
          </Grid>
        </Layout>
      </div>
    )
  }
}

export default blogclass

export const query = graphql`
  query BlogQueryClass {
    Programming: allMarkdownRemark(
      filter: { frontmatter: { cat: { eq: "Programming" } } }
    ) {
      totalCount
      edges {
        node {
          id

          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cat
          }

          fields {
            slug
          }

          excerpt
        }
      }
    }
    All: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cat
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
