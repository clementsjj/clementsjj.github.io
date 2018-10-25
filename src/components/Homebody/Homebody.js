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
} from '../../images/icons'

export default class Homebody extends Component {
  render() {
    const outerPaneStyle = {
      display: 'flex',
      margin: 10,
      justifyContent: 'space-around',
    }
    const innerPaneStyle = {
      width: '40vw',
      height: '40vh',
      //border: '1px solid blue',
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
    }
    const iconStyle = {
      height: 50,
      width: 'auto',
      margin: 10,
    }

    return (
      <Pane elevation={1} style={outerPaneStyle}>
        <Pane elevation={4} style={innerPaneStyle}>
          <Pane style={iconContainer} elevation={2}>
            <img style={iconStyle} src={react} />
            <img style={iconStyle} src={nodejs} />
            <img style={iconStyle} src={mongodb} />
            <img style={iconStyle} src={html5} />
          </Pane>
          <br />
          <br />
          <Pane style={iconContainer} elevation={2}>
            <img style={iconStyle} src={linux} />
            <img style={iconStyle} src={apple} />
            <img style={iconStyle} src={mysql} />
          </Pane>
        </Pane>
        <Pane elevation={4} style={innerPaneStyle}>
          <h2>Brief Ish About Me</h2>
          <h5>Fullstack Ish</h5>
          <h5>Veteran Ish</h5>
          <h5>University of Wisconsin Ish</h5>
          <h5>New York City Ish</h5>
          <h6>More About Me</h6>
        </Pane>
      </Pane>
    )
  }
}
