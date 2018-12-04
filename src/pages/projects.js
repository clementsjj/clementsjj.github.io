import React from 'react'
import { Link } from 'gatsby'
import { Card, Header, Container, Image } from 'semantic-ui-react'
import Layout from '../components/layout'
import mbdb from '../images/mbdb.png'

const Projects = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'}>
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Card href="https://mbdb.netlify.com" target="_blank">
        <Image src={mbdb} />
        <Card.Header>Manhattan Bathroom Database</Card.Header>
        <Card.Content>
          <Card.Description>
            MBDB is a database of bathrooms in Manhattan.
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  </Layout>
)

export default Projects
