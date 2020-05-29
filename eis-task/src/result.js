import axios from 'axios';


export default axios.create(
    {
        baseURL: 'https://testtask-689db.firebaseio.com/'
    }
);