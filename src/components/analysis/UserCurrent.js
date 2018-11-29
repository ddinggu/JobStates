import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';

const UserCurrent = ({
  allCount, document, pass, fail,
}) => {
  const progressbar = (state, sum, title) => {
    const ratio = (state / sum) * 100;
    return (
      <div style={{ width: '20%', display: 'inline-block', margin: '3rem' }}>
        {title}
        <CircularProgressbar
          percentage={ratio}
          text={`${ratio}%`}
          initialAnimation
        />
      </div>
    );
  };

  return (
    <div>
      <div>현재 유저 상황</div>
      {progressbar(allCount - document, allCount, '서류 합격률')}
      {progressbar(pass, allCount, '최종 합격률')}
      <span>현재 {allCount - fail}개 채용 진행중</span>
    </div>
  );
};

UserCurrent.propTypes = {
  allCount: PropTypes.number,
  document: PropTypes.number,
  pass: PropTypes.number,
  fail: PropTypes.number,
};

UserCurrent.defaultProps = {
  allCount: 1,
  document: 0,
  pass: 0,
  fail: 0,
};

export default UserCurrent;
