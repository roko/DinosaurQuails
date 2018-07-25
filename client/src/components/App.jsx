import React, { Component, Fragment } from 'react';
import Nav from './Nav.jsx';
import SelectBar from './SelectBar.jsx';
import JobList from './JobList.jsx';
import LoginSignUp from './LoginSignUp.jsx';
import CreateJob from './CreateJob.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: false,
      user: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        id: ''
      },
      jobs: [],
      loginSignupButtonIsClicked: false,
      isLoggedIn: false,
      view: false
    };
    this.showLoginOrSignUp = this.showLoginOrSignUp.bind(this);
    this.submitData.bind(this);
    this.closeDialog.bind(this);
  }

  retrieveData(endpoint, params, callback) {
    axios
      .get(endpoint, params)
      .then(response => {
        // update respective data
        callback(response);
      })
      .catch(err => console.log(err));
  }

  submitData(endpoint, params, callback) {
    axios
      .post(endpoint, params)
      .then(response => {
        callback(response);
      })
      .catch(err => console.log(err));
  }

  updateData(endpoint, params, callback) {
    axios
      .put(endpoint, params, callback)
      .then(response => {
        callback(response);
      })
      .catch(err => console.log(err));
  }

  deleteData(endpoint, params, callback) {
    axios
      .put(endpoint, params, callback)
      .then(response => {
        callback(response);
      })
      .catch(err => console.log(err));
  }

  displayLoginSignup(id) {
    this.setState({
      loginSignupButtonIsClicked: id
    });
    console.log('current id', this.state.loginSignupButtonIsClicked);
  }

  //can also use this for the logout component
  updateStatus(status) {
    console.log('did i log in', status);
    this.setState({
      isLoggedIn: status
    })
  }

  updateUserInfo(firstName, lastName, userName, email, id) {
    this.setState({
      user: {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        id: id
      }
    }, this.getJobData)
  }

  showLoginOrSignUp(){
    const view = this.state.loginSignupButtonIsClicked
    console.log('current state',view )

    if (view) {
      console.log('eggs')
      return (
        <LoginSignUp
          view={view}
          displayLoginSignup={this.displayLoginSignup.bind(this)}
          submitData={this.submitData.bind(this) }
          isLoggedIn={this.updateStatus.bind(this)}
          updateUserInfo = {this.updateUserInfo.bind(this)}
          getJobData={this.getJobData.bind(this)}
          />
          )
    }
  }

  //this function gets called when user logs in, adds job, updates/deletes job
  getJobData() {
    if(this.state.isLoggedIn) {
      this.retrieveData('/jobs', {userId: this.state.user.id}, ((response, err) => {
        console.log('got job data', response.data)
        this.setState({
          jobs: response.data
        });
      }));
    }
  }

  showLoginOrSignUp() {
    const view = this.state.loginSignupButtonIsClicked;
    console.log('current state', view);

    if (view) {
      return <LoginSignUp view={view} displayLoginSignup={this.displayLoginSignup.bind(this)} />;
    }

    console.log(this.state);

    if (this.state.view === 'create') {
      return (
        <CreateJob
          view={this.state.view}
          onSubmit={this.createNewJob.bind(this)}
          onClose={this.closeDialog.bind(this)}
        />
      );
    }
  }

  displayCreateJob(option) {
    this.setState({
      view: option,
      loginSignupButtonIsClicked: false
    });
  }

  createNewJob(job) {
    this.submitData('/jobs', job, response => {
      console.log(response);
      this.setState({
        view: ''
      });
    });
  }

  closeDialog() {
    this.setState({
      view: ''
    });
  }

  render() {
    return (
      <div>
        <Fragment>
          <Nav
            displayLoginSignup={this.displayLoginSignup.bind(this)}
            isLoggedIn={this.state.isLoggedIn}
            displayCreateJob={this.displayCreateJob.bind(this)}
          />
          <SelectBar />

          <JobList jobData={this.state.jobs} />
        </Fragment>
        <div className="signInRegister">
          {this.showLoginOrSignUp()}
        </div>
      </div>
    );
  }
}

export default App;
