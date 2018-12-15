import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob, filterFetchData, getDetailJob } from 'actions/action_Job';
import JobListHeader from './JobListHeader';
import PropTypes from 'prop-types';
import { Grid, Segment, Table, Image } from 'semantic-ui-react';
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

  mapList = jobData => {
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
            <Table.Cell width={2}>
              <Image
                src={
                  jobData.logo ||
                  process.env.PUBLIC_URL + '/image/icon-enterprise.png'
                }
                alt=""
                circular
                size="mini"
              />
            </Table.Cell>
            <Table.Cell width={3}>{jobData.brand}</Table.Cell>
            <Table.Cell width={2}>{jobData.status}</Table.Cell>
            <Table.Cell width={6}>{jobData.title}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  filterSearch = (value, inputValue) => {
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
    const { job, filter, loading } = this.props;
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
                  <Table.HeaderCell width={2} style={{ paddingLeft: '25px' }}>
                    로고
                  </Table.HeaderCell>
                  <Table.HeaderCell width={3} style={{ paddingLeft: '23px' }}>
                    회사명
                  </Table.HeaderCell>
                  <Table.HeaderCell width={2}>지원상태</Table.HeaderCell>
                  <Table.HeaderCell width={6}>직무</Table.HeaderCell>
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

JobList.propTypes = {
  job: PropTypes.instanceOf(Array),
  filter: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    job: state.job.allJobData,
    filter: state.job.filterData,
    loading: state.job.loading,
  };
};

export default connect(
  mapStateToProps,
  { fetchJob, getDetailJob, filterFetchData, push },
)(JobList);
