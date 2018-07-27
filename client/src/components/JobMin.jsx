import React, { Component } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const styles = {
  gridTile: {
    padding: 10,
    borderRadius: 3
  }
}

const JobMin = (props) => (
        <GridListTile style={styles.gridTile} onClick={() => props.detailOpen(props.job)}>
        <img 
        src={props.job.company.logoUrl} 
        alt={props.job.company.name}
         />
        <GridListTileBar title={props.job.company.name} subtitle={<span>{props.job.company.jobTitle}</span>} />
      </GridListTile>
)

export default JobMin;

