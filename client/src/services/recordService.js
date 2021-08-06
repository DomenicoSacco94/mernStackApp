import axios from "axios";
import { recordName } from "../config/dbConfig.json";

export const createRecord = async (newData) => {
  return await axios
    .post(`http://localhost:3000/${recordName}/add`, newData)
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error);
    });
};

export const retrieveRecord = (id) => {
  return axios
    .get(`http://localhost:3000/${recordName}/${id}`)
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteRecord = (id) => {
  return axios
    .delete(`http://localhost:3000/${recordName}/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const retrieveRecords = () => {
  return axios
    .get(`http://localhost:3000/${recordName}/`)
    .catch(function (error) {
      console.log(error);
    });
};

export const updateRecord = (id, editedData) => {
  return axios
    .post(`http://localhost:3000/${recordName}/update/${id}`, editedData)
    .then((res) => console.log(res.data))
    .catch(function (error) {
      console.log(error);
    });
};
