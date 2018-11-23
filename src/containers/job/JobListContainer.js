import { connect } from 'react-redux';
import JobList from './JobDetail';

const mapStateToProps = state => ({
  job: state.job.allJobData,
  filter: state.job.filterData,
});

export default connect(mapStateToProps)(JobList);
