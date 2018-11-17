import { connect } from 'react-redux';
import aHeader from './aHeader';
import { fetchHeader } from '../../actions/action_header';

const mapStateToProps = state => ({
  header: state.header,
});

export default connect(
  mapStateToProps,
  { fetchHeader },
)(aHeader);
