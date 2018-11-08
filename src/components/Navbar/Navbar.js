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

// let window = {}
// window.location = {}
// window.location.pathname = '/'

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
    fontFamily: 'Lato',
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
//let path = this.props.location ? this.props.location.pathname : '/'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShown: false,
      selectedIndex: 0,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      path: '/',
    }
  }

  handlePageNavigation() {}

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

  componentDidMount() {
    // console.log('Navbar Props: ', this.props)
    //console.log(`Navbar Location: `, this.props.location)
    //console.log(`Navbar Location.pathname: `, this.props.location.pathname)
    console.log(`Window.location.pathname: `, window.location)
  }

  render() {
    //let location = {}
    //location.pathname = '/'

    //console.log('Default Location: ', location)
    const { classes } = this.props
    const { location } = this.props
    //console.log('New Location :', location)

    const { anchorEl, mobileMoreAnchorEl } = this.state
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
    //console.log('Location-Navbar-Render: ', location)
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
                  //variant="outlined"
                  // variant={
                  //   window != undefined && window.location.pathname === '/'
                  //     ? 'contained'
                  //     : 'outlined'
                  // }
                  variant={
                    typeof window !== 'undefined' &&
                    window.location.pathname == '/'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={this.handlePageNavigation}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about" className="nav">
                <Button
                  className={classes.grow}
                  style={{ margin: 5 }}
                  color={'primary'}
                  //variant="outlined"
                  variant={
                    typeof window !== 'undefined' &&
                    window.location.pathname == '/about'
                      ? 'contained'
                      : 'outlined'
                  }
                  onClick={this.handlePageNavigation}
                >
                  About
                </Button>
              </Link>
              <Link to="/blog" className="nav">
                <Button
                  style={{ margin: 5 }}
                  color={'primary'}
                  variant={
                    typeof window !== 'undefined' &&
                    window.location.pathname == '/blog'
                      ? 'contained'
                      : 'outlined'
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
