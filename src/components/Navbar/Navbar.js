import React, { Component } from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import './navbar.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'block',
    fontFamily: 'Heletica',
    fontSize: '.7rem',
    [theme.breakpoints.up('sm')]: { display: 'block', fontSize: '1.5rem' },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { display: 'flex' },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: { display: 'none' },
  },
})

const styleColor = {
  // height: '8vh'
  //backgroundColor: '#1f8714',
  backgroundColor: '#00008b',
}

class Navbar extends Component {
  state = {
    isShown: false,
    selectedIndex: 0,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { location } = this.props
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Link to="/" className="nav">
            <Button
              style={{ margin: 5 }}
              className={classes.grow}
              color={'primary'}
              variant="outlined"
              //variant={location.pathname === '/' ? 'contained' : 'outlined'}
            >
              Home
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" className="nav">
            <Button
              className={classes.grow}
              style={{ margin: 5 }}
              color={'primary'}
              variant="outlined"
              // variant={
              //   location.pathname === '/about' ? 'contained' : 'outlined'
              // }
            >
              About
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/blog" className="nav">
            <Button
              style={{ margin: 5 }}
              color={'primary'}
              variant="outlined"
              // variant={location.pathname === '/blog' ? 'contained' : 'outlined'}
            >
              Blog
            </Button>
          </Link>
        </MenuItem>
      </Menu>
    )

    console.log('Navbar Props: ', this.props)
    console.log(`Navbar Location: `, location)
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={styleColor}>
            <Typography variant="h5" color="inherit" className={classes.title}>
              {'{JJ_Clements}'}
              {/* {location.pathname === '/'
                ? 'The Internet Home of { JJ_Clements }'
                : '{ JJ_Clements }'} */}
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/" className="nav">
                <Button
                  style={{ margin: 5 }}
                  className={classes.grow}
                  color={'primary'}
                  variant="outlined"
                  // variant={
                  //   this.props.location.pathname === '/'
                  //     ? 'contained'
                  //     : 'outlined'
                  // }
                >
                  Home
                </Button>
              </Link>
              <Link to="/about" className="nav">
                <Button
                  className={classes.grow}
                  style={{ margin: 5 }}
                  color={'primary'}
                  variant="outlined"
                  // variant={
                  //   location.pathname === '/about' ? 'contained' : 'outlined'
                  // }
                >
                  About
                </Button>
              </Link>
              <Link to="/blog" className="nav">
                <Button
                  style={{ margin: 5 }}
                  color={'primary'}
                  variant="outlined"
                  // variant={
                  //   location.pathname === '/blog' ? 'contained' : 'outlined'
                  // }
                >
                  Blog
                </Button>
              </Link>
              <Button
                style={{ margin: 5, marginLeft: 20 }}
                disabled
                variant="outlined"
                color="inherit"
                onClick={() => this.setState({ isShown: true })}
              >
                Dashboard
              </Button>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            {/* <Link to="/" className="nav">
              <Button
                style={{ margin: 5 }}
                className={classes.grow}
                color={'primary'}
                variant={location.pathname === '/' ? 'contained' : 'outlined'}
              >
                Home
              </Button>
            </Link>
            <Link to="/about" className="nav">
              <Button
                className={classes.grow}
                style={{ margin: 5 }}
                color={'primary'}
                variant={
                  location.pathname === '/about' ? 'contained' : 'outlined'
                }
              >
                About
              </Button>
            </Link>
            <Link to="/blog" className="nav">
              <Button
                style={{ margin: 5 }}
                color={'primary'}
                variant={
                  location.pathname === '/blog' ? 'contained' : 'outlined'
                }
              >
                Blog
              </Button>
            </Link>
            <Button
              style={{ margin: 5, marginLeft: 20 }}
              disabled
              variant="outlined"
              color="inherit"
              onClick={() => this.setState({ isShown: true })}
            >
              Dashboard
            </Button> */}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
