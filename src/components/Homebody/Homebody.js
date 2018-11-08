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
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        <Grid.Row
          centered
          columns={2}
          // color={'#00008b'}
          verticalAlign={'middle'}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          <Grid.Column verticalAlign={'middle'}>
            <Container fluid textAlign="center">
              <Card style={{ margin: '0 auto', backgroundColor: 'white' }}>
                <Card.Header>
                  <h3>Fullstack Engineer</h3>
                </Card.Header>
                <Image src={programmingsvg} />
              </Card>
            </Container>
          </Grid.Column>

          <Grid.Column>
            <Container fluid textAlign="center">
              <Card style={{ margin: '0 auto', backgroundColor: 'white' }}>
                <Card.Header>
                  <h4>Army Veteran</h4>
                </Card.Header>
                <Card.Content>
                  <img style={iconStyleTwo} src={usarmy} alt="usarmy" />
                </Card.Content>
              </Card>

              <Card style={{ margin: '0 auto', backgroundColor: 'white' }}>
                <Card.Header>
                  <h4>University of Wisconsin Alumnus</h4>
                </Card.Header>
                <Card.Content>
                  <img style={iconStyleTwo} src={motionw} alt="motionw" />
                </Card.Content>
              </Card>

              <Card style={{ margin: '0 auto', backgroundColor: 'white' }}>
                <Card.Header>
                  <h4>Resides in New York City</h4>
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

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        <Grid.Row
          centered
          columns={2}
          verticalAlign={'middle'}
          style={{ backgroundColor: '#00008b', padding: 10 + 'px' }}
        >
          <Grid.Column verticalAlign={'middle'}>
            {/* <Container fluid textAlign="center"> */}
            <Card fluid>
              <Card.Header>
                <h3 style={{ color: 'black' }}>--What I Know and Love--</h3>
              </Card.Header>
              <Card.Content>
                <img style={iconStyle} src={react} alt="react" />
                <img style={iconStyle} src={redux} alt="redux" />
                <img style={iconStyle} src={nodejs} alt="nodejs" />
                <img style={iconStyle} src={mongodb} alt="mongodb" />
                <img style={iconStyle} src={html5} alt="html5" />
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Header>
                <h5>--Familiar With--</h5>
              </Card.Header>
              <Card.Content>
                <img style={iconStyle} src={mysql} alt="mysql" />
                <img style={iconStyle} src={php} alt="php" />
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Header>
                <h5>--Operating Systems--</h5>
              </Card.Header>
              <Card.Content>
                <img style={iconStyle} src={linux} alt="linux" />
                <img style={iconStyle} src={apple} alt="apple" />
                <img style={iconStyle} src={windows} alt="windows" />
                <img style={iconStyle} src={android} alt="android" />
              </Card.Content>
            </Card>
            {/* </Container> */}
          </Grid.Column>
          <Grid.Column style={{ margin: 0 }}>
            <Container
              text
              fluid
              textAlign="center"
              style={{ backgroundColor: 'white', borderRadius: 20 }}
            >
              I really dig the MERN stack -- MongoDB, Express, React, Node.js
              <br />
              <br />I have familiarity with PHP and mySQL. Kinda neat. <br />
              <br />I primarily work on my Macbook Pro and my home Windows
              desktop PC (r/pcmasterrace), while I pretend to know about Linux.
              Android is awesome too. iOS...well, it exists.
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      // <Pane elevation={1} style={outerPaneStyle}>
      //   <Pane elevation={4} style={innerPaneStyle}>
      //     <h2>Skills</h2>

      //     <h4 style={{ margin: 0, padding: 0 }}>What I Know {'&'} Love</h4>
      //     <Pane style={iconContainer} elevation={2}>
      //       <img style={iconStyle} src={react} alt="react" />
      //       <img style={iconStyle} src={redux} alt="redux" />
      //       <img style={iconStyle} src={nodejs} alt="nodejs" />
      //       <img style={iconStyle} src={mongodb} alt="mongodb" />
      //       <img style={iconStyle} src={html5} alt="html5" />
      //     </Pane>

      //     <h4 style={{ margin: 0, padding: 0, marginTop: 50 }}>
      //       -Familiar With-
      //     </h4>
      //     <Pane style={iconContainer} elevation={2}>
      //       <img style={iconStyle} src={mysql} alt="mysql" />
      //       <img style={iconStyle} src={php} alt="php" />
      //     </Pane>
      //     <h4 style={{ margin: 0, padding: 0 }}>-Comfortable With-</h4>
      //     <Pane style={iconContainer} elevation={2}>
      //       <img style={iconStyle} src={linux} alt="linux" />
      //       <img style={iconStyle} src={apple} alt="apple" />
      //       <img style={iconStyle} src={windows} alt="windows" />
      //       <img style={iconStyle} src={android} alt="android" />
      //     </Pane>
      //   </Pane>
      //   <Pane elevation={4} style={innerPaneStyle}>
      //     <h2>Brief Introduction</h2>
      //     <Pane
      //       style={{
      //         display: 'flex',
      //         flexDirection: 'column',
      //         textAlign: 'center',
      //         padding: 10,
      //         margin: 0,
      //       }}
      //       elevation={2}
      //     >
      //       <img
      //         style={iconStyleTwo}
      //         src={programmingsvg}
      //         alt="prgrammingsvg"
      //       />
      //       Fullstack Engineer{' '}
      //     </Pane>
      //     <Pane style={iconContainer} elevation={2}>
      //       <Pane
      //         style={{
      //           display: 'flex',
      //           flexDirection: 'column',
      //           textAlign: 'center',
      //           padding: 10,
      //           margin: 0,
      //         }}
      //         elevation={2}
      //       >
      //         <img style={iconStyleTwo} src={usarmy} alt="usarmy" />
      //         Army Veteran
      //       </Pane>

      //       <Pane
      //         style={{
      //           display: 'flex',
      //           flexDirection: 'column',
      //           // textAlign: 'center',
      //           padding: 10,
      //           margin: 0,
      //         }}
      //         elevation={2}
      //       >
      //         <img style={iconStyleTwo} src={motionw} alt="motionw" />
      //         Wisconsin Alum
      //       </Pane>

      //       <Pane
      //         style={{
      //           display: 'flex',
      //           flexDirection: 'column',
      //           //textAlign: 'center',
      //           padding: 10,
      //           margin: 0,
      //         }}
      //         elevation={2}
      //       >
      //         <img
      //           style={iconStyleTwo}
      //           src={chryslerbuilding}
      //           alt="chryslerbuilding"
      //         />
      //         Resides in New York City
      //       </Pane>
      //     </Pane>
      //   </Pane>
      // </Pane>
    )
  }
}
