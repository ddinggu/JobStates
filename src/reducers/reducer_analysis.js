import * as types from 'actions/actionTypes';

const initialState = {
  loading: false,
  error: false,
};

function setUserAnalysisData(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_ANALYSIS:
      return { ...state, loading: true };

    case types.GET_ANALYSIS_SUCCESS:
      return {
        loading: !state.loading,
        ...action.payload,
      };

    case types.GET_ANALYSIS_FAILURE:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
}

export default setUserAnalysisData;

// const initialState = {
//   allCount: 50,
//   document: 10,
//   meeting: 9,
//   pass: 1,
//   fail: 14,
//   allUserCount: 300,
//   allUserDocument: 100,
//   allUserMeeting: 30,
//   allUserPass: 22,
//   allUserFail: 100,
//   userHiringTechCount: {
//     'Node.js': 10,
//     MySQL: 25,
//     Git: 100,
//   },
//   userHiringCategoryCount: [['데이터', 10], ['여행', 20], ['레저', 19]],
//   allUserHiringTechCount: {
//     JavaScript: 22,
//     MySQL: 45,
//     'Vue.js': 19,
//     PostgreSQL: 19,
//   },
//   allUserHiringCategoryCount: [
//     ['공유경제', 10],
//     ['재능마켓', 20],
//     ['education', 19],
//   ],
// };
