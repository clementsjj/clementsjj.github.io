import React, { Component } from 'react'
import { Pane } from 'evergreen-ui'
import {
  Grid,
  Segment,
  Responsive,
  Card,
  Image,
  Container,
  Header,
} from 'semantic-ui-react'
import {
  react,
  nodejs,
  html5,
  mongodb,
  linux,
  apple,
  mysql,
  redux,
  windows,
  android,
  php,
} from '../../images/icons/tech'
import {
  usarmy,
  motionw,
  chryslerbuilding,
  programmingsvg,
} from '../../images/icons/other'

export default class Homebody extends Component {
  render() {
    const outerPaneStyle = {
      display: 'flex',
      margin: 10,
      justifyContent: 'space-around',
      backgroundColor: '#f0f8ff',
    }
    const innerPaneStyle = {
      width: '40vw',
      minHeight: '40vh',
      border: '1px solid #00008b',
      elevation: 2,
      margin: 20,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }

    const iconContainer = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    }

    const iconStyle = {
      height: 50,
      width: 'auto',
      margin: 10,
    }

    const iconStyleTwo = {
      width: 'auto',
      height: 100,
      padding: 0,
      display: 'block',
      margin: 'auto',
    }

    return (
      <Grid stackable padded={false}>
        <Grid.Row
          centered
          columns={2}
          // color={'#00008b'}
          verticalAlign={'middle'}
          style={{ backgroundColor: '#f0f8ff', color: 'black' }}
        >
          <Grid.Column verticalAlign={'middle'}>
            <Container fluid textAlign="center">
              <Card
                raised
                style={{ margin: '0 auto', backgroundColor: 'white' }}
              >
                <Card.Header>
                  <h3>Fullstack Engineer</h3>
                </Card.Header>
                <Image src={programmingsvg} />
              </Card>
            </Container>
          </Grid.Column>

          <Grid.Column>
            <Container fluid textAlign="center">
              <Card
                raised
                style={{
                  margin: '0 auto',
                  marginBottom: 10,
                  backgroundColor: 'white',
                }}
              >
                <Card.Header>
                  <h4>Army Veteran</h4>
                </Card.Header>
                <Card.Content>
                  <img style={iconStyleTwo} src={usarmy} alt="usarmy" />
                </Card.Content>
              </Card>

              <Card
                raised
                style={{
                  margin: '0 auto',
                  marginBottom: 10,
                  backgroundColor: 'white',
                }}
              >
                <Card.Header>
                  <h4>University of Wisconsin Alumnus</h4>
                </Card.Header>
                <Card.Content>
                  <img style={iconStyleTwo} src={motionw} alt="motionw" />
                </Card.Content>
              </Card>

              <Card
                raised
                style={{ margin: '0 auto', backgroundColor: 'white' }}
              >
                <Card.Header>
                  <h4>New York City Resident</h4>
                </Card.Header>{' '}
                <Card.Content>
                  <img
                    style={iconStyleTwo}
                    src={chryslerbuilding}
                    alt="chryslerbuilding"
                  />
                </Card.Content>
              </Card>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
