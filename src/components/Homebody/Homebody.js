import React, { Component } from 'react'
import { Pane } from 'evergreen-ui'
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
      <Pane elevation={1} style={outerPaneStyle}>
        <Pane elevation={4} style={innerPaneStyle}>
          <h2>Skills</h2>

          <h4 textAlign="center" style={{ margin: 0, padding: 0 }}>
            What I Know {'&'} Love
          </h4>
          <Pane style={iconContainer} elevation={2}>
            <img style={iconStyle} src={react} />
            <img style={iconStyle} src={redux} />
            <img style={iconStyle} src={nodejs} />
            <img style={iconStyle} src={mongodb} />
            <img style={iconStyle} src={html5} />
          </Pane>

          <h4
            textAlign="center"
            style={{ margin: 0, padding: 0, marginTop: 50 }}
          >
            -Familiar With-
          </h4>
          <Pane style={iconContainer} elevation={2}>
            <img style={iconStyle} src={mysql} />
            <img style={iconStyle} src={php} />
          </Pane>
          <h4 textAlign="center" style={{ margin: 0, padding: 0 }}>
            -Comfortable With-
          </h4>
          <Pane style={iconContainer} elevation={2}>
            <img style={iconStyle} src={linux} />
            <img style={iconStyle} src={apple} />
            <img style={iconStyle} src={windows} />
            <img style={iconStyle} src={android} />
          </Pane>
        </Pane>
        <Pane elevation={4} style={innerPaneStyle}>
          <h2 textAlign="center">Brief Introduction</h2>
          <Pane
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              padding: 10,
              margin: 0,
            }}
            elevation={2}
          >
            <img style={iconStyleTwo} src={programmingsvg} />
            Fullstack Engineer{' '}
          </Pane>
          <Pane style={iconContainer} elevation={2}>
            <Pane
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                padding: 10,
                margin: 0,
              }}
              elevation={2}
            >
              <img style={iconStyleTwo} src={usarmy} />
              Army Veteran
            </Pane>

            <Pane
              style={{
                display: 'flex',
                flexDirection: 'column',
                // textAlign: 'center',
                padding: 10,
                margin: 0,
              }}
              elevation={2}
            >
              <img style={iconStyleTwo} src={motionw} />
              Wisconsin Alum
            </Pane>

            <Pane
              style={{
                display: 'flex',
                flexDirection: 'column',
                //textAlign: 'center',
                padding: 10,
                margin: 0,
              }}
              elevation={2}
            >
              <img style={iconStyleTwo} src={chryslerbuilding} />
              Resides in New York City
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    )
  }
}
