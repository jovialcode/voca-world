import axios from "axios";

const setPath = (env: string) => {
    if(env === "development") return 'http://localhost:8000';
}


const createClient = () => {
    return axios.create({
        baseURL: setPath(process.env.NODE_ENV)
    });

    // client.interceptors.request.use((config) => {
    //     const token = getCookie('access_token');
    //
    //     // eslint-disable-next-line no-param-reassign
    //     config.headers.Authorization = token || '';
    //
    //     return config;
    // });
};

export default createClient();