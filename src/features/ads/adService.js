import axios from "axios";

const API_URL = "http://localhost:5000/api/ads/";

// Create New Ad
const createAd = async (token, adData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, adData, config);
    return response.data;
}

// Get Ads
const getAds = async _ => {
    const response = await axios.get(API_URL);
    return response.data;
}

// Get Ad
const getAd = async (token, adID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + adID, config);
    return response.data;
}

// Get Ad
const getUserAds = async token => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + "myAds", config);
    return response.data;
}

// Delete Ad
const deleteUserAd = async (token, adID) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + adID, config);
    return response.data;
}

const adService = {
    createAd,
    getAds,
    getAd,
    getUserAds,
    deleteUserAd
}

export default adService;