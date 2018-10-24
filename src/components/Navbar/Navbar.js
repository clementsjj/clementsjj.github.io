import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import JMenu from './JMenu'
import Sidebar from './Sidebar'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const styleColor = {
  // height: '8vh'
  // backgroundColor: '#1f8714',
  backgroundColor: '#00008b'
}

class Navbar extends Component {
  state = {
    isShown: false,
    selectedIndex: 0
  };

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={styleColor}>
            <IconButton color="inherit" aria-label="Menu">
              <JMenu />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              The Internet Home of {"<JJ_Clements />"}
            </Typography>
            <Sidebar />
            <Button color="inherit" onClick={()=>this.setState({isShown:true})}>Dashboard</Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Navbar)
