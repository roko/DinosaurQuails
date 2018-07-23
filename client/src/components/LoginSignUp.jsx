import React from 'react';
// This will build the Modal for User Login
// On the Modal will be an option for Sign In
// Would be a good idea to make separate components to call here for both Login and SignUp
class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  render() {
    if (this.props.view === 'login') {
      return (
      <div>Replace With Material Dialogue component or custom Modal for LOGIN</div>
        )
    }

    if (this.props.view === 'register') {
      return (
      <div>Replace With Material Dialogue component or custom Modal for REGISTRATION</div>
        )
    }
  }
}

export default LoginSignUp;