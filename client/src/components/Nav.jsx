import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { MenuIcon } from "@material-ui/icons"

const Nav = (props) => (
  <div className="nav">
    <AppBar position="static">
      <Toolbar>
        <IconButton className="Menu" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className="logo">
          job.concat
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Nav;