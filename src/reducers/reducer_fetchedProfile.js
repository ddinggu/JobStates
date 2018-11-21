import {
  FETCH_USER_PROFILE_BEGIN,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  FETCH_USER,
} from '../actions/action_userprofile';

const initialState = {
  items: null,
  loading: false,
  error: null,
  editor: {
    nick: null,
    phone: null,
    email: null,
    blog: null,
    github: null,
    experience: null,
    project: null,
    favoriteTech: null,
    favoriteCategory: null,
  },
};

export default function userProfileReducer(state = initialState, action) {
  // console.log('action received', action);
  switch (action.type) {
    case FETCH_USER_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USER:
      return {
        ...state,
        loading: false,
        items: action.payload.data,
      };

    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: {},
      };

    case 'UPDATE_FIELD':
      return {
        ...state,
        editor: {
          ...state.editor,
          [action.key]: action.value,
        },
      };

      // case 'UPDATE_FIELD_PUSH':
      // return {
      //   ...state,
      //   editor: {
      //     ...state.editor,

      //   }
      // }

    default:
      return state;
  }
}
