import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
 Form, Grid, Image, List 
} from 'semantic-ui-react';
import { fetchJob } from '../../actions/action_Job';

class JobDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob();
  }

  render() {
    const { job } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      <Form margin="3em">
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>채용공고 상황</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
              현재 이 채용공고는 {job[0].status}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>회사</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={9} style={{ marginLeft: '5rem' }}>
              <Image
                src={job[0].logo}
                alt=""
                height="10%"
                width="10%"
                style={{ display: 'inline-block' }}
              />
              <List.Content
                style={{ display: 'inline-block', marginLeft: '3rem' }}
              >
                {job[0].brand}
              </List.Content>
              <List.Item>
                <List.Icon
                  name="linkify"
                  style={{ display: 'inline-block', marginLeft: '3rem' }}
                />
                <a href={job[0].companyUrl}>{job[0].companyUrl}</a>
              </List.Item>
              회사소개 : <span>{job[0].intro}</span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>산업 분야</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[2].category.map(tech => (
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
              {job[0].hireTech.map(tech => (
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
              {job[0].title}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>주요 업무</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].importantInfo}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>채용상세</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].detailInfo}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>공고 이미지</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              <img src={job[0].hireImage} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>연봉</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].salary}
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
              {job[0].statusDate}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>지원 마감일</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].deadLine}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>지역</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].address}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>내가 생각하는 이 공고의 장점</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].advantage}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>내가 생각하는 이 공고의 단점</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].disadvantage}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>해당 공고만의 취업 전략</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].strategy}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job.allJobData,
});

export default connect(
  mapStateToProps,
  { fetchJob },
)(JobDetail);
