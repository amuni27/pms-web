import axios from 'axios';

const BASE_URL = " http://localhost:9000/api/v1";


export const create = async (resourceName, jsonData) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.post(`${BASE_URL}/${resourceName}`, jsonData, {
        'headers': headers
    });
}

export const createWithExtraResource = async (resourceName, id, lastResource, jsonData) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.post(`${BASE_URL}/${resourceName}/${id}/${lastResource}`, jsonData, {
        'headers': headers
    });
}

export const createByIdWithExtraResourceWithExtraId = async (resourceName, id, lastResource, id2) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }

    return axios.post(`${BASE_URL}/${resourceName}/${id}/${lastResource}/${id2}`, {
        'headers': headers
    });
}
export const find = async (resourceName) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.get(`${BASE_URL}/${resourceName}`, {
        'headers': headers

    });
}

export const findById = async (resourceName, id) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.get(`${BASE_URL}/${resourceName}/${id}`, {
        'headers': headers
    });
}

export const findByIdWithExtraResource = async (resourceName, id, lastResource) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.get(`${BASE_URL}/${resourceName}/${id}/${lastResource}`, {
        'headers': headers
    });
}

export const updateById = async (resourceName, jsonData, id) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.put(`${BASE_URL}/${resourceName}/${id}`, jsonData, {
        'headers': headers
    });
}

export const deleteById = async (resourceName, id) => {
    const idToken = localStorage.getItem('id_token');

    const headers = {
        'Content-Type': 'application/json',
    };
    if (idToken) {
        headers['Authorization'] = `Bearer ${idToken}`;
    }
    return axios.delete(`${BASE_URL}/${resourceName}/${id}`, {
        'headers': headers
    });
}