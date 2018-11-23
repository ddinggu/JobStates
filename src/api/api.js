import axios from 'axios';

const URL = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com';

export const getUserAnalysisData = () => axios.get(`${URL}/analysis`);

export const postUserJobPosting = data => axios.post(`${URL}/test`, data);

export const getAutoCompleteData = company => axios.get(`${URL}/job?brand=${company}`);
