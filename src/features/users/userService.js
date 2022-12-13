import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

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

// Change Password
const changePassword  = async (token, userData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.patch(API_URL + "changePassword", userData, config);
    return response.data;
}

// Edit
const editAccount  = async (token, userData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.patch(API_URL + "edit", userData, config);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

const userService = {
    register,
    login,
    logout,
    changePassword,
    editAccount
}

export default userService;