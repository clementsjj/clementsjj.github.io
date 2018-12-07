import React from 'react'
import { Link } from 'gatsby'
import { Card, Header, Container, Image } from 'semantic-ui-react'
import Layout from '../components/layout'
import mbdb from '../images/mbdb.png'
import thekitchen from '../images/thekitchen.png'

const Projects = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'}>
    <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card
        href="https://mbdb.netlify.com"
        target="_blank"
        style={{ margin: 10 }}
      >
        <Image src={mbdb} />
        <Card.Header textAlign="center">
          Manhattan Bathroom Database
        </Card.Header>
        <Card.Content>
          <Card.Description>
            MBDB is a database of bathrooms in Manhattan.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card
        href="https://thekitchen.netlify.com"
        target="_blank"
        style={{ margin: 10 }}
      >
        <Image src={thekitchen} />
        <Card.Header textAlign="center">The Kitchen</Card.Header>
        <Card.Header textAlign="center">A Minimalist Recipe Finder</Card.Header>
        <Card.Content>
          <Card.Description>
            This minimalist web app will find a recipe based on ingredients that
            you enter.
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  </Layout>
)

export default Projects
