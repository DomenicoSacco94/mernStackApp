import React, { Component } from "react";
import defaultData from "../config/models/data";
import { withRouter } from "react-router";
import { retrieveRecord, updateRecord } from "../services/recordService";
import { recordName } from "../config/dbConfig.json";

const properties = Object.keys(defaultData);

class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeProperty = this.onChangeProperty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.setState(defaultData);
  }

  componentDidMount() {
    retrieveRecord(this.props.match.params.id).then((response) => {
      const data = response?.data? response.data : {error: true}
      this.setState(data);
    });
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

    // When post request is sent to the create url, axios will add a new record(new) to the database.
    const editedData = this.state;

    updateRecord(this.props.match.params.id, editedData).then((res) => {
      return this.props.history.push("/");
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    if (this.state && !this.state.error) {
      return (
        <div style={{ marginTop: 20 }}>
          <h3>{`Update ${recordName.toUpperCase()}`}</h3>
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
                value={`Update ${recordName.toUpperCase()}`}
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
    } else {
      return <div> Object Not Found </div>;
    }
  }
}

export default withRouter(Edit);
