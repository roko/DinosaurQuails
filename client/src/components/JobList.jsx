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
const JobList = ({jobData, detailOpen}) => (
  <div style={styles.root}>
      <GridList cols={3} cellHeight={180} style={styles.gridList} >
        {jobData.map(job => (
          <JobMin key={job._id} detailOpen={detailOpen} job={job} />
        ))}
      </GridList>
  </div>
)

export default JobList;