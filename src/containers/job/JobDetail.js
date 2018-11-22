import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Grid,
  Image,
  List,
} from 'semantic-ui-react';
import { fetchJob } from '../../actions/action_Job';

class JobDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
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
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              <span>현재 이 채용공고는 {job[0].status} </span>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>회사</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              <span>
                <Image src={job[0].logo} alt="" height="20px" width="15px" />
                <List.Content>{job[0].brand}</List.Content>
              </span>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href={job[0].companyUrl}>www.rocketpunch.com</a>
                </List.Content>
              </List.Item>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>요구 기술 스텍</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].hireTech}
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
              <div>연봉</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].salary}
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
              <div>채용조건</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              test
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>지원 등록일,마감일</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].deadLine}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>장점</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].advantage}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>단점</div>
              <div style={{ border: '1px solid' }} />
            </Grid.Column>
            <Grid.Column width={10} style={{ marginLeft: '5rem' }}>
              {job[0].disadvantage}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: '5rem' }}>
              <div>나의 생각 정리</div>
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
