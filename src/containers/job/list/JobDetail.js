import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { deleteJobData } from 'actions/action_Job';
import editJobData from 'actions/action_JobEdit';

import JobCompany from 'components/job/edit/JobCompany';
import JobHire from 'components/job/edit/JobHire';
import JobComment from 'components/job/edit/JobComment';
import JobSchedule from 'components/job/edit/JobSchedule';
import JobDetailHeader from './JobDetailHeader';

import './JobDetail.css';

class JobDetail extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { job, editJobData, deleteJobData } = this.props;
    if (!job.hireId) return <Redirect to="/joblist" />;

    return (
      <Container className="jobdetail">
        <JobDetailHeader
          provider={job.provider}
          commentId={job.commentId}
          hireId={job.hireId}
          scheduleId={job.scheduleId}
          loading={job.loading}
          error={job.error}
          deleteJobData={deleteJobData}
        />

        <JobSchedule
          scheduleId={job.scheduleId}
          status={job.status}
          statusDate={job.statusDate}
          onSubmitEditData={editJobData}
        />

        <JobCompany
          companyId={job.companyId}
          brand={job.brand}
          logo={job.logo}
          intro={job.intro}
          category={job.category}
          companyUrl={job.companyUrl}
          onSubmitEditData={editJobData}
          status={job.status}
          statusDate={job.statusDate}
        />

        <JobHire
          hireId={job.hireId}
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
          experience={job.experience}
          onSubmitEditData={editJobData}
        />

        <JobComment
          onSubmitEditData={editJobData}
          commentId={job.commentId}
          advantage={job.advantage}
          disAdvantage={job.disAdvantage}
          strategy={job.strategy}
        />
      </Container>
    );
  }
}

JobDetail.propTypes = {
  job: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  editJobData: PropTypes.func,
  deleteJobData: PropTypes.func,
};

const mapStateToProps = state => ({
  job: state.job.currentData.data,
  // forRedirect: state.job.currentData.isMoveToDetail,
  hireId: state.job.currentData.data.hireId,
  loading: state.job.loading,
  error: state.job.error,
});

export default connect(
  mapStateToProps,
  { editJobData, deleteJobData },
)(JobDetail);
