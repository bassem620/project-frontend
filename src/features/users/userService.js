import axios from "axios";

const API_URL = "https://project-backend-eg.herokuapp.com/api/users/";

// Register User
const register = async userData => {
    const response = await axios.post(API_URL, userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Login User
const login = async userData => {
    const response = await axios.post(API_URL + "login", userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Logout User
const logout = _ => {
    localStorage.removeItem('user');
}

const userService = {
    register,
    login,
    logout
}

export default userService;