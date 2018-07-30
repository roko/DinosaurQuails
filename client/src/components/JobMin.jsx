import React, { Component } from 'react';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const styles = {
  gridTile: {
    padding: 10,
    borderRadius: 3
  }
}

const urlFix = (url) => {
  let cleanDomain = url.split('www.')[1];
  return `https://logo.clearbit.com/${cleanDomain}`;
}

const JobMin = (props) => (
        <GridListTile style={styles.gridTile} onClick={() => props.detailOpen(props.job)}>
        <img 
        src={urlFix(props.job.company.webSite) || props.job.company.logoUrl} 
        alt={props.job.company.name}
         />
        <GridListTileBar title={props.job.company.name} subtitle={<span>{props.job.company.jobTitle}</span>} />
      </GridListTile>
)

export default JobMin;

