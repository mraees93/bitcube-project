import axios from "axios";
import { api } from "../urlConfig";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        // will send token with the api
        "Authorization": token ? `Bearer ${token}` : ""
    }
});

export default axiosInstance;