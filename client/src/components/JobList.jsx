import React from 'react';
import JobMin from './JobMin.jsx';
import { GridList } from '@material-ui/core';


const styles = {
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  gridList: {
    width: 500,
    height: 450,
  },
}
const JobList = (props) => (
  <div style={styles.root}>
      <GridList cols={3} cellHeight={180} style={styles.gridList} >
        {props.jobData.map((job, i) => (
          <JobMin key={i} detailOpen={props.detailOpen} job={job} />
        ))}
      </GridList>
  </div>
)

export default JobList;