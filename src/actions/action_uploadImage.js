import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingUploadImage = () => ({
  type: types.POST_IMAGE_BEGIN,
});

const uploadImageSuccess = imgUrl => ({
  type: types.POST_IMAGE_SUCCESS,
  payload: imgUrl,
});

const uploadImage = data => async (dispatch) => {
  dispatch(loadingUploadImage());
  try {
    const imgUrlResponse = await api.jobPostImage(data);
    dispatch(uploadImageSuccess(imgUrlResponse));
  } catch (err) {}
};

export default uploadImage;
