import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecordList from "./components/recordList";
import { Navbar } from "./components/navbar";
import EditSchema from "./components/edit";
import 'antd/dist/antd.css';
import "./App.css";

//TODO repackage to each docker container
//TODO add proper logging
//TODO adapt for more entities
//TODO create generic testing for client and server through jest/react-testing-library

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecordList} />
          <Route path="/new" component={EditSchema} />
          <Route path="/edit/:id" component={EditSchema} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
