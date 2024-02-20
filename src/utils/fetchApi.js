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
                if (result.statusCode ==401) {
                    console.log("unauthorised user",result);
                    window.location.href = "/login"
                }
                res(result);
            })
            .catch(error => {
                
                rej(error);
            });
    });
};

export const axiosApi = async (endpoint, data={}, options = {}) => {
    return new Promise((res, rej) => {
        let Server2 = server + endpoint;
        axios.defaults.withCredentials = true;
        axios.post(Server2, data,options)
            .then(result => {
                // console.log(result.data);
                if (result.statusCode == 401) {
                    console.log("unauthorised user", result);
                    window.location.href = "/login"
                }
                res(result.data);
            })
            .catch(error => {
                // console.error('Axios API Error:', error.response);
                // console.error('Error Message:', error.response?.data?.message);
                
                alert(error.response?.data?.message || "An unknown error occurred.");
                rej(error);
                
            });
    });
};