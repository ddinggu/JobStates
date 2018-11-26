import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Grid, Image, List } from 'semantic-ui-react';
import { fetchJob } from 'actions/action_Job';
import editJobData from 'actions/action_JobEdit';
import './JobDetail.css';
import JobSchedule from 'components/job/edit/JobSchedule';
import JobCompany from 'components/job/edit/JobCompany';
import JobHire from 'components/job/edit/JobHire';
import JobComment from 'components/job/edit/JobComment';
import JobDetailHeader from './JobDetailHeader';

class JobDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { job, editJobData } = this.props;

    const hireMapping = category => <div className="mapping">{category}</div>;

    // 추후 hireId를 발급받을 수 있으면 수정
    // if (!job.hireId) return <Redirect to="/joblist" />;

    return (
      <div id="job-detail">
        <Form>
          <div style={{ height: '4.2rem' }}>
            <JobDetailHeader />
          </div>
          <Grid>
            {/* <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용공고 상황</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                현재 이 채용공고는 <b>{job.status}</b>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>전형 일자</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.statusDate}
              </Grid.Column>
            </Grid.Row> */}
            <JobSchedule
              scheduleId={/* job.scheduleId */ 1}
              status={job.status}
              statusDate={job.statusDate}
              onSubmitEditData={editJobData}
            />

            {/* <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>회사</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                <Image
                  src={job.logo}
                  alt=""
                  height="10%"
                  width="10%"
                  style={{ display: 'inline-block' }}
                />
                <List.Content
                  style={{ display: 'inline-block', marginLeft: '3rem' }}
                >
                  <span>{job.brand}</span>
                </List.Content>
                <span>
                  <List.Icon
                    name="linkify"
                    style={{ display: 'inline-block', marginLeft: '3rem' }}
                  />
                  <a href={job.companyUrl}>{job.companyUrl}</a>
                </span>
                <p>회사소개 : {job.intro}</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>산업 분야</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.category.map(hireMapping)}
              </Grid.Column>
            </Grid.Row> */}

            <JobCompany
              companyId={/* job.companyId */ 1}
              brand={job.brand}
              logo={job.logo}
              intro={job.intro}
              category={job.category}
              companyUrl={job.companyUrl}
              onSubmitEditData={editJobData}
            />

            {/* <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용명</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.title}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>요구 기술 스텍</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.hireTech.map(hireMapping)}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용링크</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <div>
                  <a href={job.hireUrl}>{job.hireUrl}</a>{' '}
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>주요 업무</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.importantInfo}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용상세</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.detailInfo}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>공고 이미지</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                <img src={job.hireImage} alt="" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>연봉</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.salary}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용조건</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                test
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>지원 마감일</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.deadLine}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>지역</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.address}
              </Grid.Column>
            </Grid.Row> */}

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

            {/* <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 장점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.advantage}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>내가 생각하는 이 공고의 단점</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.disadvantage}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>해당 공고만의 취업 전략</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.strategy}
              </Grid.Column>
            </Grid.Row> */}

            <JobComment
              onSubmitEditData={editJobData}
              commentId={/* this.props.commentId */ 1}
              advantage={job.advantage}
              disadvantage={job.disadvantage}
              strategy={job.strategy}
            />
          </Grid>
        </Form>
      </div>
    );
  }
}

JobDetail.propTypes = {
  job: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  job: state.job.currentData.data,
});

export default connect(
  mapStateToProps,
  { fetchJob, editJobData },
)(JobDetail);
