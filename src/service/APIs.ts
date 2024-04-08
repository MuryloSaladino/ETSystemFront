import axios from "axios";

export const ETSystemAPI = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000
})