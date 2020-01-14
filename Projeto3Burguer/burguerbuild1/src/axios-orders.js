import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-33f4c.firebaseio.com/'
});

export default instance;