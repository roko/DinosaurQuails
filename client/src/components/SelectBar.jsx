import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};


/**
 * @description This sends info of which button was clicked back to App component so its filter state can be updated for the JobList to show the jobs of that status.
**/
class SelectBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper style={styles.root}>
        <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered >
          <Tab label="All" onClick={() => this.props.changeJobFilter('all')}/>
          <Tab label="Pending" onClick={() => this.props.changeJobFilter('pending')}/>
          <Tab label="Offered" onClick={() => this.props.changeJobFilter('offered')}/>
          <Tab label="Rejected" onClick={() => this.props.changeJobFilter('rejected')}/>
        </Tabs>
      </Paper>
    );
  }
}

export default SelectBar;