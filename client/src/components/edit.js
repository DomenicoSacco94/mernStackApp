import React, { useEffect, useState } from "react";
import JSONSchemaForm from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory, useParams, withRouter, useLocation } from "react-router";
import { dataSchema } from "../config/models/dataSchema";
import {
  createRecord,
  retrieveRecord,
  updateRecord,
} from "../services/recordService";
import { uiSchema } from "../config/models/uiSchema";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const { pathname } = useLocation();
  const [currentData, setCurrentData] = useState(null);

  let LastModified = (props) => {
    return props.value ? (
      <div> {new Date(props.value).toString("dddd, MMMM ,yyyy")} </div>
    ) : (
      " N/A (new Item)"
    );
  };

  useEffect(() => {
    !pathname.includes("new") &&
      retrieveRecord(id).then((response) => {
        setCurrentData(response?.data ? response.data : { error: true });
      });
  }, [id, pathname]);

  const onSubmit = (form) => {
    form.formData = {
      ...form.formData,
      lastModified: new Date().toISOString(),
    };

    pathname.includes("new")
      ? createRecord(form.formData).then((res) => {
          history.push("/");
        })
      : updateRecord(id, form.formData).then((res) => {
          history.push("/");
        });
  };

  return (
    <JSONSchemaForm
      formData={currentData}
      onSubmit={onSubmit}
      schema={dataSchema}
      uiSchema={uiSchema}
      widgets={{ lastModified: LastModified }}
    />
  );
};

export default withRouter(Edit);
