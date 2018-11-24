import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
 Form, Grid, Image, List 
} from 'semantic-ui-react';
import { fetchJob } from 'actions/action_Job';
import { Redirect } from 'react-router-dom';
import JobDetailHeader from './JobDetailHeader';

class JobDetail extends Component {
  render() {
    // console.log('rerendering!!');

    const { job } = this.props;

    if (!job.hireId) return <Redirect to="/joblist" />;

    return (
      <div>
        <Form>
          <div style={{ height: '4.2rem' }}>
            <JobDetailHeader />
          </div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>채용공고 상황</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
                현재 이 채용공고는 {job.status}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
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
                  {job.brand}
                </List.Content>
                <List.Item>
                  <List.Icon
                    name="linkify"
                    style={{ display: 'inline-block', marginLeft: '3rem' }}
                  />
                  <a href={job.companyUrl}>{job.companyUrl}</a>
                </List.Item>
                회사소개 : <span>{job.intro}</span>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>산업 분야</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
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
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
                <div>요구 기술 스텍</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
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
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
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
                <div>전형 일자</div>
                <div style={{ border: '1px solid' }} />
              </Grid.Column>
              <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
                {job.statusDate}
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
            </Grid.Row>

            <Grid.Row>
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
            </Grid.Row>
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
  { fetchJob },
)(JobDetail);
