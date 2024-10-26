// utils/api.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: 'https://flexi-backend.onrender.com/api/users', // Replace with your actual base URL
});

/**
 * Function to send a POST request.
 * @param {string} url - The endpoint relative to the base URL.
 * @param {Object} data - The data to send in the request body.
 * @returns {Promise} - Returns a promise that resolves to the response.
 */
export const postData = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Rethrow the error for handling elsewhere
    }
};

/**
 * Function to send a GET request.
 * @param {string} url - The endpoint relative to the base URL.
 * @returns {Promise} - Returns a promise that resolves to the response.
 */
export const getData = async (url) => {
    try {
        const response = await api.get(url);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error for handling elsewhere
    }
};

/**
 * Function to send a PUT request (for editing).
 * @param {string} url - The endpoint relative to the base URL.
 * @param {Object} data - The updated data to send in the request body.
 * @returns {Promise} - Returns a promise that resolves to the response.
 */
export const putData = async (url, data) => {
    try {
        const response = await api.put(url, data);
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error updating data:', error);
        throw error; // Rethrow the error for handling elsewhere
    }
};
