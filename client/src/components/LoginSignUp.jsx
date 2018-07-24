import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

// This will build the Modal for User Login
// On the Modal will be an option for Sign In
// Would be a good idea to make separate components to call here for both Login and SignUp

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      open: false
    };
  }

  logIntoAccount () {
    axios.post('/login', {
      email: document.getElementsByClassName('email')[0].value,
      password: document.getElementsByClassName('password')[0].value
    })
    .then(function (response) {
      console.log('logged in');
    })
    .catch(function (error) {
      console.log('cannot log in');
    });
  }


  registerForAccount () {
    axios.post('/signup', {
      firstName: document.getElementsByClassName('firstName')[0].value,
      lastName: document.getElementsByClassName('lastName')[0].value,
      userName: document.getElementsByClassName('userName')[0].value,
      email: document.getElementsByClassName('email')[0].value,
      password: document.getElementsByClassName('password')[0].value

    })
    .then(function (response) {
      console.log('got a new account!');
    })
    .catch(function (error) {
      console.log('no account for you');
    });
  }

  render() {
    if (this.props.view === 'login') {
      return (
        <div>
          <Dialog
            open={!!this.props.view}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">
            {"Log into your account"}
          </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                Email:
                <input type="text" className="email" name="email" required/>
              </div>

              <div>
                Password:
               <input type="text" className="password" name="password" required/>
              </div>


            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.logIntoAccount()} color="primary">
              Log in
            </Button>
            <Button onClick={() => this.props.displayLoginSignup(false)} color="primary" autoFocus>
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
        )
    }

    if (this.props.view === 'register') {
      return (
       <div>
        <Dialog
          open={!!this.props.view}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Register for a new account"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

              <div>
                First Name:
                <input type="text" className="firstName" name="firstName" required/>
              </div>

              <div>
                LastName:
                <input type="text" className="lastName" name="lastName" required/>
              </div>

              <div>
                Username:
                <input type="text" className="userName" name="userName" required/>
              </div>

              <div>
                Email:
               <input type="text" className="email" name="email" required/>
              </div>

              <div>
                Password:
               <input type="text" className="password" name="password" required/>
              </div>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.registerForAccount()} color="primary">
              Register
            </Button>
            <Button onClick={() => this.props.displayLoginSignup(false)} color="primary" autoFocus>
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
        )
    }
  }
}

export default LoginSignUp;