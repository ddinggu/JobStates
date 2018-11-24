import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob, filterFetchData, getDetailJob } from 'actions/action_Job';
import JobListHeader from './JobListHeader';
import { Grid, Segment, Table } from 'semantic-ui-react';
import './JobList.css';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterFlag: false,
    };
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob();
  }

  getDetailJob = () => {
    this.history.push("/jobdetail");
  };

  _mapList = jobData => {
    const { getDetailJob } = this.props;
  
    return (
      // <Grid>
      //   <Grid.Column width={16}>
      //     <Segment
      //       className="job-list specific"
      //       key={jobData.hireId}
      //       id={jobData.hireId}
      //       onClick={e => getDetailJob(e.currentTarget.id)}
      //     >
      //       <span>
      //         <img src={jobData.logo} width="35px" height="50px" />
      //       </span>
      //       <span className="job-list brand"> / {jobData.brand}</span>
      //       <span> / {jobData.title}</span>
      //       <span> / {jobData.status}</span>
      //     </Segment>
      //   </Grid.Column>
      // </Grid>

      <Table>
        <Table.Body>
          <Table.Row  className="job-list specific"
             key={jobData.hireId}
             id={jobData.hireId}
             onClick={e => {getDetailJob(e.currentTarget.id)}}
             style={{cursor: 'pointer'}}>
            <Table.Cell width={3}><img src={jobData.logo} width="35px" height="50px" /></Table.Cell>
            <Table.Cell width={4}>{jobData.brand}</Table.Cell>
            <Table.Cell width={4}>{jobData.title}</Table.Cell>
            <Table.Cell width={4} >{jobData.status}</Table.Cell>
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
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={4}>Company</Table.HeaderCell>
                  <Table.HeaderCell width={4}>회사명</Table.HeaderCell>
                  <Table.HeaderCell width={4}>직무</Table.HeaderCell>
                  <Table.HeaderCell width={4}>지원상태</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
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
