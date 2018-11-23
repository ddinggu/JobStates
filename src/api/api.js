import axios from 'axios';

const URL = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com';

export const getUserAnalysisData = () => axios.get(`${URL}/analysis`);

export const postUserJobPosting = data => axios.post(`${URL}/test`, data);

export const postUserProfile = data => axios.post(`${URL}/test`, data);

export const getUserProfile = () => axios.get(`${URL}/user`);

export const deleteUserProfile = data => axios.delete(`${URL}/test`, data);

export const postUserImage = data => axios.post(`${URL}/test`, data);

export const fetchJob = () => axios.get(`${URL}/job`);
