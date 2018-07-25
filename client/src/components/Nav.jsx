import React, { Component } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    marginLeft: 100,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    backgroundColor: '#7dce94',
  }
};

const Nav = props => (
        <div id="nav" style={styles.root}>
        <AppBar position="static" style={styles.appbar}>
          <Toolbar variant="dense" >
            <IconButton id="Menu" color="inherit" aria-label="Menu" style={styles.menuButton}>
              <div>menu</div>
            </IconButton>
            <Typography variant="headline" color="inherit" id="logo" style={styles.flex}>
              <div>job.concat</div>
            </Typography>
            {props.isLoggedIn ? (
               <Button color="inherit" id="logout" onClick={() => props.displayLoginSignup('logout')}>Logout</Button>
               ) : (
            <div>
              <Button color="inherit" id="login" onClick={() => props.displayLoginSignup('login')}>Login</Button>
              <Button color="inherit" id="register" onClick={() => props.displayLoginSignup('register')}>Register</Button>
            </div>
              )}
          </Toolbar>
        </AppBar>
      </div>
);

export default Nav;