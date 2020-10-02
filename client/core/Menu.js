import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}))

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ffa726'}
  else
    return {color: '#ffffff'}
}

const Menu = withRouter(({ history }) => {
    const classes = useStyles()
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Fakebook
          </Typography>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(history, "/")}>
              <HomeIcon/>
            </IconButton>
          </Link>
          {
            !auth.isAuthenticated() && (
              <span>
                <Link to="/signin">
                  <Button style={isActive(history, "/signin")}>Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button style={isActive(history, "/signup")}>Sign up
                  </Button>
                </Link>
              </span>
            )
          }
          {
            auth.isAuthenticated() && (
              <span>
                <Link to='/users'>
                  <Button style={isActive(history, '/users')}>Users</Button>
                </Link>
                <Link to={"/user/" + auth.isAuthenticated().user._id}>
                  <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
                </Link>
                <Button color="secondary" variant='contained' onClick={() => {
                    auth.clearJWT(() => history.push('/'))
                  }}>Sign out</Button>
              </span>
            )
          }
        </Toolbar>
      </AppBar>
    )
  } 
)

export default Menu
