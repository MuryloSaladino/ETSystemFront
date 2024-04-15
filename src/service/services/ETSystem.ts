import axios from "axios"
import Service from "./Service"

const ETSystemAPI = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000
})

const ETSystemService = new Service(ETSystemAPI)

export default ETSystemService