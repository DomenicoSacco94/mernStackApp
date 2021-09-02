import React, { useEffect, useState } from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory, useParams, withRouter } from "react-router";
import { dataSchema } from "../config/models/dataSchema";
import { retrieveRecord, updateRecord } from "../services/recordService";

const EditSchema = () => {
  const history = useHistory();
  const { id } = useParams();
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    retrieveRecord(id).then((response) => {
      console.log(response);
      setCurrentData(response?.data ? response.data : { error: true });
    });
  }, [id]);

  const onSubmit = (form) => {
    updateRecord(id, form.formData).then((res) => {
      history.push("/");
    });
  };

  console.log(currentData);

  return (
    <JSONSchemaForm
      formData={currentData}
      onSubmit={onSubmit}
      schema={dataSchema}
    />
  );
};

export default withRouter(EditSchema);
