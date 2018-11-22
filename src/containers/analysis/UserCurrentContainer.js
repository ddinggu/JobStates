import { connect } from 'react-redux';
import UserCurrent from './UserCurrent';

const mapStateToProps = state => ({
  allCount: state.Analysis.allCount,
  document: state.Analysis.document,
  meeting: state.Analysis.meeting,
  pass: state.Analysis.pass,
  fail: state.Analysis.fail,
  //   allUserCount: state.Analysis.allUserCount,
  //   allUserDocument: state.Analysis.allUserDocument,
  //   allUserMeeting: state.Analysis.allUserMeeting,
  //   allUserPass: state.Analysis.allUserPass,
  //   allUserFail: state.Analysis.allUserFail,
});

export default connect(mapStateToProps)(UserCurrent);
