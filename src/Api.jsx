import axios from "axios";


const api = axios.create({
    baseURL: 'http://192.168.3.14:8000/api',
    withCredentials: true
})

export default api