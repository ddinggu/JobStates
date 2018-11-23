import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchJob,
  filterFetchData,
  getDetailJob,
} from 'actions/action_Job';
import JobListHeader from './JobListHeader';
import { Grid, Segment } from 'semantic-ui-react';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterFlag: false,
    };
  }

  componentDidMount() {
    const { fetchJob, job } = this.props;
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
            onClick={e => getDetailJob(e.currentTarget.id)}
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

  _filterSearch = (value, inputValue) => {
    // console.log('value;;;; ', value);
    // const { filter } = this.props;
    this.props.filterFetchData(value, inputValue);
    if (value === '전체' && !!inputValue) {
      this.setState({ filterFlag: true });
    } else if (value === '전체') {
      this.setState({ filterFlag: false });
    } else {
      this.setState({ filterFlag: true });
    }
  };

  render() {
    const { job, getDetailJob, filter } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      /* equal width => table 적용 */
      <div>
        <JobListHeader _filterSearch={this._filterSearch} />
        <Grid className="job-list container">
          <Grid.Column width={16}>
            <Segment>
              {this.state.filterFlag
                ? filter.map(this._mapList)
                : job.map(this._mapList)}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.allJobData,
    filter: state.job.filterData,
  };
};

export default connect(
  mapStateToProps,
  { fetchJob, getDetailJob, filterFetchData },
)(JobList);
