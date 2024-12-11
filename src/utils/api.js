// utils/api.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
    baseURL: 'https://flexi-backend.onrender.com/api/users', // Replace with your actual base URL
});

/**
 * Send a POST request.
 * @param {string} url - The endpoint relative to the base URL.
 * @param {Object} data - The data to send in the request body.
 * @returns {Promise} - Resolves to the response data.
 */
export const postData = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

/**
 * Send a GET request.
 * @param {string} url - The endpoint relative to the base URL.
 * @returns {Promise} - Resolves to the response data.
 */
export const getData = async (url) => {
    try {
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

/**
 * Send a PUT request.
 * @param {string} url - The endpoint relative to the base URL.
 * @param {Object} data - The updated data to send in the request body.
 * @returns {Promise} - Resolves to the response data.
 */
export const putData = async (url, data) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

/**
 * Send a DELETE request.
 * @param {string} id - The ID to include in the request URL.
 * @returns {Promise} - Resolves to the response data.
 */
export const deleteData = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};
