import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5002/api" });

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchFile = () => API.get('/file');
export const createFile = (newFile) => API.post('/file', newFile);
export const updateFile = (id, updatedFile) => API.patch(`/file/${id}`, updatedFile);
export const deleteFile = (id) => API.delete(`/file/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const forgotPassword = (formData) => API.post('/user/forgotpassword', formData);
