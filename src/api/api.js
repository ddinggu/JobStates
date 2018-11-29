import axios from 'axios';
import { GoogleVision_API_KEY } from 'config/google';


const URL = ' http://13.209.99.252:3001';
const GoogleVisionURL = 'https://vision.googleapis.com/v1/images:annotate?key=';
const URL_GoogleVision = GoogleVisionURL + GoogleVision_API_KEY;


const header = {
  headers: {
    id: 1,
  },
  timeout: 2500, // 해당 시간안에 응답이 오지 않으면 에러로 간주
};

const header_googlevision = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Analysis
export const getUserAnalysisData = () => axios.get(`${URL}/analysis`, header);

// Job
export const fetchJob = () => axios.get(`${URL}/schedule`, header);
export const postUserJobPosting = data => axios.post(`${URL}/schedule/write`, data, header);
export const deletePostingJob = data => axios.delete(`${URL}/schedule`, { data, ...header });
export const updateJobPostData = (data, part) => axios.patch(`${URL}/schedule/${part}`, data, header);
export const jobPostImage = data => axios.post(`${URL}/image`, data, header);


// Job_Posting Helper
export const getAutoCompleteData = company => axios.get(`${URL}/schedule/search?brand=${company}`, header);
export const postImageToGetText = imgData => axios.post(URL_GoogleVision, imgData, header_googlevision);

// User Profile
export const getUserProfile = () => axios.get(`${URL}/user/profile`, header);
export const postUserProfile = (data, part) => axios.post(`${URL}/user/${part}`, data, header);
export const updateUserProfile = (data, part) => axios.patch(`${URL}/user/${part}`, data, header);
export const deleteUserProfile = (data, part) => axios.delete(`${URL}/user/${part}`, { data, ...header });
export const postUserImage = data => axios.post(`${URL}/test`, data, header);


