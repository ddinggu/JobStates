import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob, filterFetchData } from '../../actions/action_Job';
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
    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment>
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
    const { filter } = this.props;
    this.props.filterFetchData(value);
    console.log('value@@', typeof value)
    if (value === '전체') {
      this.setState({ filterFlag: false });
    } else {
      this.setState({ filterFlag: true });
    }
  };

  render() {
    const { job, filter } = this.props;
    console.log('job::', job, 'filter::', filter, this.state);
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
  { fetchJob, filterFetchData },
)(JobList);
