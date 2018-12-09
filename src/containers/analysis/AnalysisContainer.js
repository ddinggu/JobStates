import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import getAnalysis from 'actions/action_analysis';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import DonutChart from 'components/analysis/DonutChart';
import UserCurrent from 'components/analysis/UserCurrent';
import Loading from 'components/common/Loading';

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
      documentCount,
      meetingCount,
      passCount,
      failCount,
      loading,
    } = this.props;
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <Container className="jobdetail">
            <UserCurrent
              allCount={allCount}
              documentCount={documentCount}
              meetingCount={meetingCount}
              passCount={passCount}
              failCount={failCount}
            />
            <DonutChart
              tech={tech}
              category={category}
              allTech={allTech}
              allCategory={allCategory}
            />
          </Container>
        )}
      </>
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
  loading: PropTypes.bool,
  setAnalysisData: PropTypes.func,
  status: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  tech: state.Analysis.data.userHiringTechCount,
  category: state.Analysis.data.userHiringCategoryCount,
  allTech: state.Analysis.data.allUserHiringTechCount,
  allCategory: state.Analysis.data.allUserHiringCategoryCount,
  allCount: state.Analysis.data.allCount,
  documentCount: state.Analysis.data.documentCount,
  meetingCount: state.Analysis.data.meetingCount,
  passCount: state.Analysis.data.passCount,
  failCount: state.Analysis.data.failCount,
  loading: state.Analysis.loading,
  status: state.Analysis.status,
});

const mapDispatchToProps = dispatch => ({
  setAnalysisData: () => dispatch(getAnalysis()),
  redirect: () => dispatch(push('/login')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnalysisContainer);
