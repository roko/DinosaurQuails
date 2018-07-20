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
      <GridListTile key={job.img}>
        <img src={job.img} alt={job.title} />
        <GridListTileBar title={job.company.name} subtitle={<span>{job.company.jobTitle}</span>} actionIcon="FILLIN" />
      </GridListTile>
    )
  }
}

export default JobMin;