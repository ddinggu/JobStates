import { connect } from 'react-redux';
import fetchHeader from 'actions/action_header';
import Header from './Header';

const mapStateToProps = state => ({
  header: state.header,
  notification: state.job.currentData.data.hireStatus,
});

export default connect(
  mapStateToProps,
  { fetchHeader },
)(Header);
