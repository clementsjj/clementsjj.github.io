import React, { Component } from 'react'
import { Pane, Button } from 'evergreen-ui'
import { Link } from 'gatsby'

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
        {/* <Pane elevation={4} style={innerPaneStyle}>
          <Pane style={iconContainer} elevation={2}>
            
          </Pane>
          <br />
          <Pane style={iconContainer} elevation={2}>
            
          </Pane>
        </Pane>
        <Pane elevation={4} style={innerPaneStyle}>
          <h2>Brief Ish About Me</h2>
          <h5>Fullstack Ish</h5>
          <h5>Veteran Ish</h5>
          <h5>University of Wisconsin Ish</h5>
          <h5>New York City Ish</h5>
          <h6>More About Me</h6>
        </Pane> */}
        <Link to="/my-files" className="nav">
          <Button style={{ margin: 5 }} color={'primary'}>
            Website Files
          </Button>
        </Link>
        <Link to="/markdown-files" className="nav">
          <Button style={{ margin: 5 }} color={'primary'}>
            Markdown Files
          </Button>
        </Link>
      </Pane>
    )
  }
}
