import React, { Component } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';
// const styles = {tile: {
//   padding: '10px'
// }}
class JobMin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetailed: false
    }
  }

  render() {
    console.log('this.props.job: ', this.props.job)
    return (
      <GridListTile key={this.props.job._id}>
        <img src={this.props.job.company.logoUrl} alt={this.props.job.company.name} />
        <GridListTileBar title={this.props.job.company.name} subtitle={<span>{this.props.job.company.jobTitle}</span>} actionIcon="FILLIN" />
      </GridListTile>
    )
  }
}

export default JobMin;

