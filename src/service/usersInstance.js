import axios from "axios";

export const usersInstance = axios.create({
    baseURL: "https://6488cdf40e2469c038fe6409.mockapi.io",
    /* baseURL: "http://localhost:5000/", */
    
})