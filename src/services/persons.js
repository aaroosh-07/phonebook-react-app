import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const getAll = () => {
    return axios.get(baseUrl);
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
};

const updateRecord = (id, updatedObject) => {
    return axios.put(`${baseUrl}\\${id}`, updatedObject);
};

const deleteRecord = (id) => {
    return axios.delete(`${baseUrl}\\${id}`);
};

export default {
    getAll: getAll,
    create: create,
    update: updateRecord,
    deleteRecord: deleteRecord,
};
