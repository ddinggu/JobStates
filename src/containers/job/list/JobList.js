import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob, filterFetchData, getDetailJob } from 'actions/action_Job';
import JobListHeader from './JobListHeader';
import { Grid, Segment, Table } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import CommonLoading from 'components/common/Loading';

import './JobList.css';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterFlag: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { fetchJob } = this.props;
    fetchJob();
  }

  _mapList = jobData => {
    const { getDetailJob } = this.props;

    return (
      <Table>
        <Table.Body>
          <Table.Row
            className="job-list specific"
            key={jobData.hireId}
            id={jobData.hireId}
            onClick={e => {
              getDetailJob(e.currentTarget.id);
              push('/jobdetail');
            }}
            style={{ cursor: 'pointer' }}
          >
            <Table.Cell width={3}>
              <img src={jobData.logo} width="35px" height="50px" />
            </Table.Cell>
            <Table.Cell width={4}>{jobData.brand}</Table.Cell>
            <Table.Cell width={4}>{jobData.title}</Table.Cell>
            <Table.Cell width={4}>{jobData.status}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  _filterSearch = (value, inputValue) => {
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
    const { job, filter, loading, error } = this.props;
    if (loading) {
      return (
        <>
          <CommonLoading />
        </>
      );
    }

    return (
      <>
        <JobListHeader _filterSearch={this._filterSearch} />
        <Grid className="job-list container">
          <Grid.Column width={16}>
            <Table fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>company</Table.HeaderCell>
                  <Table.HeaderCell>회사명</Table.HeaderCell>
                  <Table.HeaderCell>직무</Table.HeaderCell>
                  <Table.HeaderCell>지원상태</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
            <Segment className={job.length ? null : 'container-nonedata'}>
              {job.length
                ? this.state.filterFlag
                  ? filter.map(this._mapList)
                  : job.map(this._mapList)
                : '채용공고를 등록해 주세요!!'}
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.allJobData,
    filter: state.job.filterData,
    forRedirect: state.job.currentData,
    loading: state.job.loading,
  };
};

export default connect(
  mapStateToProps,
  { fetchJob, getDetailJob, filterFetchData, push },
)(JobList);
