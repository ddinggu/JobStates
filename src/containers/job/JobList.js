import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions/action_Job';

class JobList extends Component {
  constructor(props) {
    super(props);

    const { fetchJob } = this.props;
    fetchJob();
  }

  _mapList = jobData => {
    console.log(jobData);
    return (
      <div style={{ border: '1px solid black', margin: '1em' }}>
        <span>
          <img src={jobData.logo} width="35px" height="50px" />
        </span>
        <span> / {jobData.brand}</span>
        <span> / {jobData.title}</span>
        <span> / {jobData.status}</span>
      </div>
    );
  };

  render() {
    const { job } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      <div
        className="job-list container"
        style={{
          border: '1px solid black',
          padding: '2em',
          position: 'relative',
          bottom: '-1em',
        }}
      >
        {job[0].map(this._mapList)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

export default connect(
  mapStateToProps,
  { fetchJob },
)(JobList);
