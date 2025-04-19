import axios from 'axios';

export const fetchJobsFromApi = async (page) => {
  const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
  return response.data;
};
