import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Grid, Image, List, Container, Header } from 'semantic-ui-react';
import { fetchJob } from 'actions/action_Job';
import { Redirect } from 'react-router-dom';
import JobDetailHeader from './JobDetailHeader';
import { deleteJobData } from 'actions/action_Job';
import { Button, Icon, Modal } from 'semantic-ui-react';
import './JobDetail.css';

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

    // 추후 hireId를 발급받을 수 있으면 수정
    if (!job.hireId) return <Redirect to="/joblist" />;

    return (
      <Container className="jobdetail">
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={10} textAlign="left">
              {job.status}
            </Grid.Column>
            <Grid.Column width={2} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>회사</Header>
            </Grid.Column>
            <Grid.Column textAlign="center" width={10} className="jobbody">
              <Grid>
                <Grid.Column width={1}>
                  <Image src={job.logo} alt="" textAlign="left" />
                </Grid.Column>
                <Grid.Column width={13} textAlign="left">
                  {job.brand}
                </Grid.Column>
                <Grid.Column width={2} textAlign="right">
                  <span className="linkBtn">
                    <a href="www.naver.com">
                      <img
                        src="https://png.pngtree.com/svg/20170904/url_650529.png"
                        height="30px"
                      />
                    </a>
                  </span>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={2}>버튼자리</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>회사소개</Header>
            </Grid.Column>
            <Grid.Column width={10} className="jobbody" textAlign="left">
              {job.intro}
            </Grid.Column>
            <Grid.Column width={2}>버튼자리</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>산업분야</Header>
            </Grid.Column>
            <Grid.Column width={10} className="jobbody" textAlign="left">
              {' '}
              {job.category.map(tech => (
                <div
                  style={{
                    display: 'inline-block',
                    border: '1px solid #bbc5d8',
                    borderRadius: '500rem',
                    marginRight: '1rem',
                    minWidth: '3em',
                    textAlign: 'center',
                    fontSize: '.85714286rem',
                    padding: '0.35rem',
                  }}
                >
                  {tech}
                </div>
              ))}
            </Grid.Column>
            <Grid.Column width={2}>버튼자리</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>채용공고</Header>
            </Grid.Column>
            <Grid.Column width={10} className="jobbody">
              <Grid.Row>
                <Grid columns="two">
                  <Grid.Column textAlign="left">
                    <Grid.Row>
                      <Header>{job.title}</Header>
                    </Grid.Row>
                    <Grid.Row>
                      (채용 기간 : {job.statusDate} ~ {job.deadLine})
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <span className="linkBtn">
                      <a href={job.hireUrl}>
                        <img
                          src="https://png.pngtree.com/svg/20170904/url_650529.png"
                          height="30px"
                        />
                      </a>
                    </span>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">필요 기술 스택</span>
                      </List.Item>
                      {job.hireTech.map(tech => (
                        <div
                          style={{
                            display: 'inline-block',
                            border: '1px solid #bbc5d8',
                            borderRadius: '500rem',
                            marginRight: '1rem',
                            minWidth: '3em',
                            textAlign: 'center',
                            fontSize: '.85714286rem',
                            padding: '0.35rem',
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">채용조건 / 연봉</span>
                      </List.Item>
                      {job.hireType} / {job.salary}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">주요업무</span>
                      </List.Item>
                      {job.importantInfo}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">채용상세</span>
                      </List.Item>
                      {job.detailInfo}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">지역</span>
                      </List.Item>
                      {job.address}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>
                        <span className="jobpostItem">공고 이미지</span>
                      </List.Item>
                      <img src={job.hireImage} alt="" />
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row textAlign="left" />
            </Grid.Column>
            <Grid.Column width={2}>버튼자리</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Header>메모</Header>
            </Grid.Column>
            <Grid.Column width={10} className="jobbody">
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>장점</List.Item>
                      {job.advantage}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>단점</List.Item>
                      {job.disadvantage}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Grid column="two">
                  <Grid.Column textAlign="left">
                    <List bulleted>
                      <List.Item>전략</List.Item>
                      {job.strategy}
                    </List>
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={2}>버튼자리 </Grid.Column>
          </Grid.Row>
          <JobDetailHeader />
        </Grid>
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

const mapDispatchToProps = dispatch => {
  const boundActionCreators = bindActionCreators(
    {
      fetchJob: fetchJob,
      deleteJobData: deleteJobData,
    },
    dispatch,
  );
  const allActionProps = { ...boundActionCreators, dispatch };
  return allActionProps;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobDetail);
