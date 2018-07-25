import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

// This will build the Modal for User Login
// On the Modal will be an option for Sign In
// Would be a good idea to make separate components to call here for both Login and SignUp

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      open: false,
      nonExistentUser: false,
      alreadyExistingUser: false
    };
  }

  logIntoAccount () {
    let requestData = {
      email: document.getElementsByClassName('email')[0].value,
      password: document.getElementsByClassName('password')[0].value
    }

    this.props.submitData('/login', requestData, ((response, err) => {
        console.log('this went through', response.data)
        if (response.data.messageCode === 103 || response.data.messageCode === 104) {
          this.setState({
            nonExistentUser: true
          })
        } else {
          this.props.updateUserInfo(response.data.firstName, response.data.lastName, response.data.userName, response.data.email, response.data._id)
          this.props.isLoggedIn(true);
          this.props.displayLoginSignup(false);
          this.props.getJobData();
        }
      }
    ))
  }

  registerForAccount () {
    let requestData = {
      firstName: document.getElementsByClassName('firstName')[0].value,
      lastName: document.getElementsByClassName('lastName')[0].value,
      userName: document.getElementsByClassName('userName')[0].value,
      email: document.getElementsByClassName('email')[0].value,
      password: document.getElementsByClassName('password')[0].value
    }

    this.props.submitData('/signup', requestData, ((response, err) => {
        console.log('got a new account', response.data)
        if (response.data.messageCode === 101 || response.data.messageCode === 102) {
          this.setState({
            alreadyExistingUser: true
          })
        } else {
          this.props.updateUserInfo(requestData.firstName, requestData.lastName, requestData.userName, requestData.email,response.data._id)
          this.props.isLoggedIn(true);
          this.props.displayLoginSignup(false);
        }
      }
    ))
  }

  render() {
    let MessageToUser = '';

    if (this.state.nonExistentUser) {
      MessageToUser = 'User does not exist';
    }

    if (this.state.alreadyExistingUser) {
      MessageToUser = 'User already exists';
    }

    console.log('view', this.props.view)
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
                {MessageToUser}
              </div>
              <div>
                Email:
                <input type="text" className="email" name="email" required/>
              </div>

              <div>
                Password:
               <input type="password" className="password" name="password" required/>
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