import { connect } from 'react-redux';
import DonutChart from './DonutChart';

const mapStateToProps = state => ({
  tech: state.Analysis.userHiringTechCount,
  category: state.Analysis.userHiringCategoryCount,
  allTech: state.Analysis.allUserHiringTechCount,
  allCategory: state.Analysis.allUserHiringCategoryCount,
});

export default connect(mapStateToProps)(DonutChart);
