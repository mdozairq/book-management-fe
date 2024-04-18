
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000/mern-challenge' })

api.interceptors.request.use((config: any) => {
    config.headers.Authorization = "e3fd2ac5-c939-491b-aecf-0666908c071c";
    return config;
});

let requestCount = 0;

api.interceptors.request.use((config: any) => {
    requestCount++;
    if (requestCount === 1) {
        // Show loader when the first request is made
        console.log("Loading...");

    }
    return config;
});

api.interceptors.response.use(
    function (response: any) {
        requestCount--;
        if (requestCount === 0) {

            console.log("Data Loaded");

        }
        return response;
    },
    function (error: Error) {
        requestCount--;
        if (requestCount === 0) {
            console.log("Data Loaded");
        }


        alert("An error occurred")

        return Promise.reject(error);
    }
);

export const getBookData = async() => await api.get('books/all');
