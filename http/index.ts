import axios from "axios"
import { ApiError } from "next/dist/server/api-utils"

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Authorization": `Bearer ${process.env.API_TOKEN}`
    }

})

export const fetchCategories = async () => await api.get("/api/categories");
