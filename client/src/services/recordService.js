import axios from "axios";
import { recordName } from "../config/dbConfig.json";

export const createRecord = (newData) => {
  return axios
    .post(`http://localhost:3000/${recordName}/add`, newData)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const retrieveRecord = (id) => {
  return axios
    .get(`http://localhost:3000/${recordName}/${id}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteRecord = (id) => {
  return axios
    .delete(`http://localhost:3000/${recordName}/${id}`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const retrieveRecords = () => {
  return axios
    .get(`http://localhost:3000/${recordName}/`)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateRecord = (id, editedData) => {
  return axios
    .post(`http://localhost:3000/${recordName}/update/${id}`, editedData)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
