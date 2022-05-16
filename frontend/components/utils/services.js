import { BASE_URL } from "./constants";
import axios from "axios"

export const findAllTasks = async() => {
    const response = await axios.get(`${BASE_URL}/tasks`);
    console.log(response);
    return response.data;
}

export const addTask = async(task) => {
    const data = {
        title: task,
        completed: false,
        progress: true
    }
    const response = await axios.post(`${BASE_URL}/tasks`, data);
    console.log(response);
    return response.data;
}

export const completeTask = async(id) => {
    const data = {
        completed: true,
        progress: false
    }
    const response = await axios.put(`${BASE_URL}/tasks/${id}`, data);
    console.log(response);
    return response.data;
}

