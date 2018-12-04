import axios from 'axios';
import { GoogleVision_API_KEY } from 'config/google';

// export const URL = 'http://13.209.99.252:3001';

export const URL = 'https://www.jobstate.xyz';

const GoogleVisionURL = 'https://vision.googleapis.com/v1/images:annotate?key=';
const URL_GoogleVision = GoogleVisionURL + GoogleVision_API_KEY;

const TokenHeader = {
  headers: {
    authorization: localStorage.token,
  },
};

const header_googlevision = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Web-Push Notification
export const getVapiedKey = () => axios.get(`${URL}/push/vapidkey`, TokenHeader);

export const postSubscription = subscription => axios.post(`${URL}/push/send`, { subscription }, TokenHeader);

export const deleteSubscription = () => axios.delete(`${URL}/push/subscription`, TokenHeader);

// Analysis
export const getUserAnalysisData = () => axios.get(`${URL}/analytics`, TokenHeader);

// Job
export const fetchJob = () => axios.get(`${URL}/schedule`, TokenHeader);
export const postUserJobPosting = data => axios.post(`${URL}/schedule/write`, data, TokenHeader);
export const deletePostingJob = data => axios.delete(`${URL}/schedule`, { data, ...TokenHeader });
export const updateJobPostData = (data, part) => axios.patch(`${URL}/schedule/${part}`, data, TokenHeader);
export const jobPostImage = data => axios.post(`${URL}/image`, data, TokenHeader);

// Job_Posting Helper
export const getAutoCompleteData = company => axios.get(`${URL}/schedule/search?brand=${company}`, TokenHeader);
export const postImageToGetText = imgData => axios.post(URL_GoogleVision, imgData, header_googlevision);

// User Profile
export const getUserProfile = () => axios.get(`${URL}/user/profile`, TokenHeader);
export const postUserProfile = (data, part) => axios.post(`${URL}/user/${part}`, data, TokenHeader);
export const updateUserProfile = (data, part) => axios.patch(`${URL}/user/${part}`, data, TokenHeader);
export const deleteUserProfile = (data, part) => axios.delete(`${URL}/user/${part}`, { data, ...TokenHeader });
export const postUserImage = data => axios.post(`${URL}/test`, data, TokenHeader);

// Fetching header
export const fetchHeader = () => axios.get(`${URL}/user/profile`, TokenHeader);

// Authenticate Correct User
export const authenticateUser = () => axios.get(`${URL}/auth/check`, TokenHeader);
