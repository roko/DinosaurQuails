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
        <img
        src="https://logo.clearbit.com/segment.com?size=200&greyscale=true"
        alt={this.props.job.company.webSite} />
        <GridListTileBar
        title={this.props.job.company.name}
        subtitle={<span>{this.props.job.company.jobTitle}</span>}
        actionIcon="FILL IN"
        />
      </GridListTile>
    )
  }
}

export default JobMin;