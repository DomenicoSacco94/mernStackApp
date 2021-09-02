import React from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory, withRouter } from "react-router";
import { dataFields, dataSchema } from "../config/models/dataSchema";
import { createRecord } from "../services/recordService";

const CreateSchema = () => {
  console.log(dataFields);

  const history = useHistory();
  const onSubmit = (form) => {
    console.log(form.formData);
    createRecord(form.formData).then((res) => {
      history.push("/");
    });
  };

  return <JSONSchemaForm onSubmit={onSubmit} schema={dataSchema} />;
};

export default withRouter(CreateSchema);
