import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchJob,
  filterFetchData,
  getDetailJob,
} from '../../actions/action_Job';
import JobListHeader from './JobListHeader';
import { Grid, Segment } from 'semantic-ui-react';

class JobList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchJob, filterFetchData } = this.props;
    fetchJob();
  }

  _mapList = jobData => {
    const { getDetailJob } = this.props;

    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment
            key={jobData.hireId}
            id={jobData.hireId}
            onClick={e => getDetailJob(e.target.id)}
          >
            <span>
              <img src={jobData.logo} width="35px" height="50px" />
            </span>
            <span> / {jobData.brand}</span>
            <span> / {jobData.title}</span>
            <span> / {jobData.status}</span>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };

  _filterSearch = value => {
    console.log(value);
    filterFetchData(value);
  };

  render() {
    const { job, getDetailJob } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      /* equal width => table 적용 */
      <div>
        <JobListHeader _filterSearch={this._filterSearch} />
        <Grid className="job-list container">
          <Grid.Column width={16}>
            <Segment>{job.map(this._mapList)}</Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.allJobData,
  };
};

export default connect(
  mapStateToProps,
  { fetchJob, getDetailJob },
)(JobList);
