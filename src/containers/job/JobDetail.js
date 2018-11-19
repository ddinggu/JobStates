import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions/action_Job';

class JobDetail extends Component {
  constructor(props) {
    super(props);

    const { fetchJob } = this.props;
    fetchJob();
  }

  render() {
    const { job } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      <div
        className="job-detail container"
        style={{ border: '1px solid', padding: '1em' }}
      >
        <div>기업명 : {job[0][0].brand}</div>
        <div>
          로고 : <img src={job[0][0].logo} alt="" height="20px" width="15px" />{' '}
        </div>
        <div>지원 사이트 링크 : </div>
        <div>요구 기술 스텍</div>
        <div>채용상세</div>
        <div>공고 이미지</div>
        <div>연봉</div>
        <div>지역</div>
        <div>채용조건</div>
        <div>채용 등록일, 마감일</div>
        <div>나의 생각 정리</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

export default connect(
  mapStateToProps,
  { fetchJob },
)(JobDetail);
