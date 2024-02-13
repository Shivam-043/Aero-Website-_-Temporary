import axios from "axios";
import server from "../auth/apple";

export const fetchApi = async (endpoint, data, options = {}) => {
    return new Promise((res, rej) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow',
            credentials: 'include',
            ...options,
        };
        fetch(server + endpoint, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                res(result);
            })
            .catch(error => {
                console.log('error', error);
                rej(error);
            });
    });
};

export const axiosApi = async (endpoint, data={}, options = {}) => {
    return new Promise((res, rej) => {
        let Server2 = server + endpoint;
        axios.defaults.withCredentials = true;
        axios.post(Server2, data)
            .then(result => {
                // console.log(result.data);
                res(result.data);
            })
            .catch(error => {
                console.log('error', error)
                rej(error);
            });
    });
};