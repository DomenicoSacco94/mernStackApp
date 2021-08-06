import React, { Component } from "react";
import { defaultData, properties, recordName } from "../models/data";
import { withRouter } from "react-router";
import { createRecord } from "../services/recordService";

class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeProperty = this.onChangeProperty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = defaultData;
  }

  onChangeProperty(propertyName) {
    return (e) => {
      this.setState({
        ...this.state,
        [propertyName]: e.target.value,
      });
    };
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newData = this.state;

    createRecord(newData).then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          {properties.map((property) => (
            <div key={property} className="form-group">
              <label>{property.toLocaleUpperCase()}</label>
              <input
                type="text"
                className="form-control"
                value={this.state[property]}
                onChange={this.onChangeProperty(property)}
              />
            </div>
          ))}
          <div className="form-group">
            <input
              type="submit"
              value={`Create ${recordName.toUpperCase()}`}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);
