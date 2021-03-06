import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteRecord, retrieveRecords } from "../services/recordService";
import { dataFields } from "../config/models/dataSchema";

const Record = (props) => (
  <tr>
    {dataFields.map((property) => (
      <td key={property}>{props.record[property]}</td>
    ))}
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    retrieveRecords().then((response) => {
      this.setState({ records: response.data });
    });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    deleteRecord(id).then((res) =>
      this.setState({
        record: this.state.records.filter((el) => el._id !== id),
      })
    );
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              {dataFields.map((property) => (
                <th key={property}>{property}</th>
              ))}
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
