import * as types from 'actions/actionTypes';
import * as api from 'api/api';

const loadingUploadImage = () => ({
  type: types.POST_BRAND_LOGO_BEGIN,
});

const uploadImageSuccess = imgUrl => ({
  type: types.POST_BRAND_LOGO,
  payload: imgUrl,
});

const uploadBrandLogoImage = data => async (dispatch) => {
  dispatch(loadingUploadImage());
  try {
    const imgUrlResponse = await api.postBrandLogoImage(data);
    // console.log('imgUrl....:::', imgUrlResponse);
    dispatch(uploadImageSuccess(imgUrlResponse));
  } catch (err) {
    console.log(err);
  }
};

export default uploadBrandLogoImage;
