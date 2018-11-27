import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Grid, Image, List, Container, Header } from 'semantic-ui-react';
import { fetchJob } from 'actions/action_Job';
import editJobData from 'actions/action_JobEdit';
import './JobDetail.css';
import JobSchedule from 'components/job/edit/JobSchedule';
import JobCompany from 'components/job/edit/JobCompany';
import JobHire from 'components/job/edit/JobHire';
import JobComment from 'components/job/edit/JobComment';
import JobDetailHeader from './JobDetailHeader';
import { deleteJobData } from 'actions/action_Job';
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
    const { hireId, deleteJobData, loading, error } = this.props;
    const { job } = this.props;
    console.log(job);
    // const { job, editJobData } = this.props;

    const hireMapping = category => <div className="mapping">{category}</div>;

    // 추후 hireId를 발급받을 수 있으면 수정
    if (!job.hireId) return <Redirect to="/joblist" />;

    //
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
        />
        <JobSchedule
          scheduleId={/* job.scheduleId */ 1}
          statusDate={job.statusDate}
          onSubmitEditData={editJobData}
        />

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
  // mapDispatchToProps,
  { fetchJob, editJobData },
)(JobDetail);

// <Grid.Row>
// <Grid.Column width={2}>
//   <Header>채용공고</Header>
// </Grid.Column>
// <Grid.Column width={10} className="jobbody">
//   <Grid.Row>
//     <Grid columns="two">
//       <Grid.Column textAlign="left">
//         <Grid.Row>
//           <Header>{job.title}</Header>
//         </Grid.Row>
//         <Grid.Row>
//           (채용 기간 : {job.statusDate} ~ {job.deadLine})
//         </Grid.Row>
//       </Grid.Column>
//       <Grid.Column textAlign="right">
//         <span className="linkBtn">
//           <a href={job.hireUrl}>
//             <img
//               src="https://png.pngtree.com/svg/20170904/url_650529.png"
//               height="30px"
//             />
//           </a>
//         </span>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>

// //   <Grid.Row>
// //     <Grid column="two">
// //       <Grid.Column textAlign="left">
// //         <List bulleted>
// //           <List.Item>
// //             <span className="jobpostItem">필요 기술 스택</span>
// //           </List.Item>
// //           {job.hireTech.map(tech => (
//             <div
//               style={{
//                 display: 'inline-block',
//                 border: '1px solid #bbc5d8',
//                 borderRadius: '500rem',
//                 marginRight: '1rem',
//                 minWidth: '3em',
//                 textAlign: 'center',
//                 fontSize: '.85714286rem',
//                 padding: '0.35rem',
//               }}
//             >
//               {tech}
//             </div>
//           ))}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>
//             <span className="jobpostItem">채용조건 / 연봉</span>
//           </List.Item>
//           {job.hireType} / {job.salary}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>
//             <span className="jobpostItem">주요업무</span>
//           </List.Item>
//           {job.importantInfo}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>
//             <span className="jobpostItem">채용상세</span>
//           </List.Item>
//           {job.detailInfo}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>
//             <span className="jobpostItem">지역</span>
//           </List.Item>
//           {job.address}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>
//             <span className="jobpostItem">공고 이미지</span>
//           </List.Item>
//           <img src={job.hireImage} alt="" />
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row textAlign="left" />
// </Grid.Column>
// <Grid.Column width={2}>버튼자리</Grid.Column>
// </Grid.Row>
// <Grid.Row>
// <Grid.Column width={2}>
//   <Header>메모</Header>
// </Grid.Column>
// <Grid.Column width={10} className="jobbody">
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>장점</List.Item>
//           {job.advantage}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>단점</List.Item>
//           {job.disadvantage}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
//   <Grid.Row>
//     <Grid column="two">
//       <Grid.Column textAlign="left">
//         <List bulleted>
//           <List.Item>전략</List.Item>
//           {job.strategy}
//         </List>
//       </Grid.Column>
//     </Grid>
//   </Grid.Row>
// </Grid.Column>
// <Grid.Column width={2}>버튼자리 </Grid.Column>
// </Grid.Row>
// <JobDetailHeader />
// </Grid>
// </Container>
// <div id="job-detail">
// <Form>
// <div style={{ height: '4.2rem' }}>
// <JobDetailHeader />
// </div>
// <Grid>

// </Grid>
// </Form>
// </div>
