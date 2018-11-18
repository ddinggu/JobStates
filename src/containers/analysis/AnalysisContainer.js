import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAnalysis from 'actions';
import PropTypes from 'prop-types';
import DonutChart from './DonutChart';
import UserCurrent from './UserCurrent';

class AnalysisContainer extends Component {
  componentDidMount() {
    const { setAnalysisData } = this.props;
    setAnalysisData();
  }

  render() {
    const {
      tech,
      category,
      allTech,
      allCategory,
      allCount,
      document,
      meeting,
      pass,
      fail,
      error,
      loading,
    } = this.props;
    return (
      <div className="DountChart" style={{ border: '1px solid black' }}>
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error! </p>
        ) : (
          <div>
            <UserCurrent
              allCount={allCount}
              document={document}
              meeting={meeting}
              pass={pass}
              fail={fail}
            />
            <DonutChart
              tech={tech}
              category={category}
              allTech={allTech}
              allCategory={allCategory}
            />
          </div>
        )}
      </div>
    );
  }
}

AnalysisContainer.propTypes = {
  tech: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Array),
  allTech: PropTypes.instanceOf(Object),
  allCategory: PropTypes.instanceOf(Array),
  allCount: PropTypes.number,
  meeting: PropTypes.number,
  document: PropTypes.number,
  pass: PropTypes.number,
  fail: PropTypes.number,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  setAnalysisData: PropTypes.func,
};

const mapStateToProps = state => ({
  tech: state.Analysis.userHiringTechCount,
  category: state.Analysis.userHiringCategoryCount,
  allTech: state.Analysis.allUserHiringTechCount,
  allCategory: state.Analysis.allUserHiringCategoryCount,
  allCount: state.Analysis.allCount,
  document: state.Analysis.document,
  meeting: state.Analysis.meeting,
  pass: state.Analysis.pass,
  fail: state.Analysis.fail,
  error: state.Analysis.error,
});

const mapDispatchToProps = dispatch => ({
  setAnalysisData: () => dispatch(getAnalysis()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnalysisContainer);
