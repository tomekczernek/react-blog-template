import axios from 'axios';

function request(method, endpoint, data = null){
    return axios({
        method, 
        url: `${process.env.REACT_APP_API_URL}${endpoint}`,
        data
    });
}

function get(endpoint){
    return request('GET', endpoint);
}

export default {get};