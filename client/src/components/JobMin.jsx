import React, { Component } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const JobMin = (props) => (
        <GridListTile onClick={() => props.detailOpen(props.job)}>
        <img 
        src={props.job.company.logoUrl} 
        alt={props.job.company.name}
         />
        <GridListTileBar title={props.job.company.name} subtitle={<span>{props.job.company.jobTitle}</span>} actionIcon="FILLIN" />
      </GridListTile>
)

export default JobMin;

