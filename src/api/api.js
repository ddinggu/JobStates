import axios from 'axios';

const URL = 'http://ec2-54-218-47-139.us-west-2.compute.amazonaws.com/analysis';

const getUserAnalysisData = () => axios.get(URL);

export default getUserAnalysisData;
