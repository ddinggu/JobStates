import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Grid, Image, List, Container, Header } from 'semantic-ui-react';
import { fetchJob } from 'actions/action_Job';
// import { push } from 'connected-react-router';
import { deleteJobData } from 'actions/action_Job';

import editJobData from 'actions/action_JobEdit';
import './JobDetail.css';
import JobSchedule from 'components/job/edit/JobSchedule';
import JobCompany from 'components/job/edit/JobCompany';
import JobHire from 'components/job/edit/JobHire';
import JobComment from 'components/job/edit/JobComment';
import JobDetailHeader from './JobDetailHeader';
import { Button, Icon, Modal } from 'semantic-ui-react';
import './JobDetail.css';
import { Redirect } from 'react-router';

class JobDetail extends Component {
  state = { open: false };
  toggle = () => this.setState({ open: !this.state.open });

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { open } = this.state;
    const { job, editJobData, loading, error, deleteJobData } = this.props;

    // const hireMapping = category => <div className="mapping">{category}</div>;

    // 추후 hireId를 발급받을 수 있으면 수정

    if (!job.hireId) return <Redirect to="/joblist" />;
    return (
      <Container className="jobdetail">
        <JobCompany
          companyId={/* job.companyId */ 1}
          brand={job.brand}
          logo={job.logo}
          intro={job.intro}
          category={job.category}
          companyUrl={job.companyUrl}
          onSubmitEditData={editJobData}
          status={job.status}
          statusDate={job.statusDate}
        />
        {/* <JobSchedule
          scheduleId={1} // job.scheduleId
          onSubmitEditData={editJobData}
        /> */}

        <JobHire
          hireId={/* this.props.hireId */ 1}
          edit={job.edit}
          title={job.title}
          hireTech={job.hireTech}
          hireUrl={job.hireUrl}
          importantInfo={job.importantInfo}
          detailInfo={job.detailInfo}
          hireImage={job.hireImage}
          salary={job.salary}
          deadLine={job.deadLine}
          address={job.address}
          provider={job.provider}
          hireType={job.hireType}
          onSubmitEditData={editJobData}
        />
        <JobComment
          onSubmitEditData={editJobData}
          commentId={/* this.props.commentId */ 1}
          advantage={job.advantage}
          disadvantage={job.disadvantage}
          strategy={job.strategy}
        />
      </Container>
    );
  }
}

JobDetail.propTypes = {
  job: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  editJobData: PropTypes.func,
  deleteJobData: PropTypes.func,
};

const mapStateToProps = state => ({
  job: state.job.currentData.data,
  forRedirect: state.job.currentData.isMoveToDetail,
  hireId: state.job.currentData.data.hireId,
  loading: state.job.loading,
  error: state.job.error,
});

export default connect(
  mapStateToProps,
  { editJobData, deleteJobData },
)(JobDetail);
