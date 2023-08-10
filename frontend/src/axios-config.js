import axios from 'axios';

const instance = axios.create({
  withCredentials: true, // Include cookies in requests
});

export default instance;
