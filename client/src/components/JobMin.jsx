import React, { Component } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';

class JobMin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetailed: false
    }
  }

  render() {
    return (
      <GridListTile key={this.props.job._id}>
        <img src={this.props.job.logoUrl} alt={this.props.job.company.name} />
        <GridListTileBar title={this.props.job.company.name} subtitle={<span>{this.props.job.company.jobTitle}</span>} actionIcon="FILLIN" />
      </GridListTile>
    )
  }
}

export default JobMin;

