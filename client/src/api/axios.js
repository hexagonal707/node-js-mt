import axios from "axios";

const baseUrl = 'http://localhost:3000';
export const userRequest = axios.create({
    baseURL: baseUrl,
});