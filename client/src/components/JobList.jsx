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

const filteredJobs = (jobData, status, detailOpen)=> {

  if(status === 'all') {
    return jobData.map((job, i) => (
            <JobMin key={i} detailOpen={detailOpen} job={job} />
            ))
  } else {
    return jobData.filter(job => job.state === status
        ).map((job, i) => (
          <JobMin key={i} detailOpen={detailOpen} job={job} />
          ))
  }
}

const JobList = (props) => (
  <div style={styles.root}>
      <GridList cols={3} cellHeight={180} style={styles.gridList} >
      {filteredJobs(props.jobData, props.filter, props.detailOpen)}
      </GridList>
  </div>
)

export default JobList;