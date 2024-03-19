import axios from "axios";

const api = axios.create({
    baseURL: "https://não-sei-ainda",
    timeout: 10000
})

export default api