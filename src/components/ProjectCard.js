import React from 'react'
import { Card, Header, Container, Image } from 'semantic-ui-react'
import github from '../images/icons/social_media'

const ProjectCard = props => {
  return (
    <Container style={{ margin: '5rem' }}>
      <Card href={props.href} target="_blank" style={{ margin: '0px' }}>
        <Image src={props.src} />
        <Card.Header textAlign="center" as="h2">
          {props.header}
        </Card.Header>
        <Card.Header textAlign="left" as="h4">
          {props.subheader}
        </Card.Header>
      </Card>

      <Card style={{ margin: '0px' }}>
        <hr />
        <Card.Description>{props.description}</Card.Description>
        <hr />
        <Card.Description>{props.extra}</Card.Description>
        <Card.Content>
          <a href={props.git}>Github</a>
        </Card.Content>
      </Card>
    </Container>
  )
}

export default ProjectCard
