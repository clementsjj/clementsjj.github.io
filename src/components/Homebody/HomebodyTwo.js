import React, { Component } from 'react'
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

export default class HomebodyTwo extends Component {
  render() {
    const outerPaneStyle = {
      display: 'flex',
      margin: 10,
      justifyContent: 'space-around',
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
          verticalAlign={'middle'}
          style={{ backgroundColor: '#f0f8ff', padding: 10 + 'px' }}
        >
          <Grid.Column verticalAlign={'middle'}>
            <Card fluid raised>
              <Card.Header>
                <h3 style={{ color: 'black' }}>-What I Know and Love-</h3>
              </Card.Header>
              <Card.Content>
                <img style={iconStyle} src={react} alt="react" />
                <img style={iconStyle} src={redux} alt="redux" />
                <img style={iconStyle} src={nodejs} alt="nodejs" />
                <img style={iconStyle} src={mongodb} alt="mongodb" />
                <img style={iconStyle} src={html5} alt="html5" />
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column style={{ margin: 0 }}>
            <Container
              text
              fluid
              textAlign="center"
              style={{ backgroundColor: '#f0f8ff', borderRadius: 20 }}
            >
              I really dig the MERN stack -- MongoDB, Express, React, Node.js
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          centered
          columns={2}
          verticalAlign={'middle'}
          style={{ backgroundColor: '#f0f8ff', padding: 10 + 'px' }}
        >
          <Grid.Column verticalAlign={'middle'}>
            <Card fluid raised>
              <Card.Header>
                <h4>--Familiar With--</h4>
              </Card.Header>
              <Card.Content>
                <img style={iconStyle} src={mysql} alt="mysql" />
                <img style={iconStyle} src={php} alt="php" />
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column style={{ margin: 0 }}>
            <Container
              text
              fluid
              textAlign="center"
              style={{ backgroundColor: '#f0f8ff', borderRadius: 20 }}
            >
              I have familiarity with PHP and mySQL. Kinda neat.{' '}
            </Container>
          </Grid.Column>
        </Grid.Row>

        {/* <Grid.Row
          centered
          columns={2}
          verticalAlign={'middle'}
          style={{ backgroundColor: '#FFFFFF', padding: 10 + 'px' }}
        > */}
        {/* <Grid.Column verticalAlign={'middle'}>
            <Container fluid textAlign="center">
              <Card fluid>
                <Card.Header>
                  <h5>---Other Things---</h5>
                </Card.Header>
                <Card.Content>
                  <img style={iconStyle} src={linux} alt="linux" />
                  <img style={iconStyle} src={apple} alt="apple" />
                  <img style={iconStyle} src={windows} alt="windows" />
                  <img style={iconStyle} src={android} alt="android" />
                </Card.Content>
              </Card>
            </Container>
          </Grid.Column>
          <Grid.Column style={{ margin: 0 }}>
            <Container
              text
              fluid
              textAlign="center"
              style={{ backgroundColor: 'white', borderRadius: 20 }}
            >
              I primarily work on my Macbook Pro and my home Windows desktop PC
              (r/pcmasterrace), while I pretend to know about Linux. Android is
              awesome too. iOS...well, it exists.
            </Container>
          </Grid.Column> */}
        {/* </Grid.Row> */}
      </Grid>
    )
  }
}
