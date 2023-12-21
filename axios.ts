import axios from "axios";

export const axiosUsers = axios.create({
    baseURL: "https://exam9-c79c0-default-rtdb.europe-west1.firebasedatabase.app/"
})
