import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// We import all the components we need in our app
import RecordList from "./components/recordList";
import "./App.css";
import { Navbar } from "./components/navbar";
import EditSchema from "./components/edit";

//TODO repackage to each docker container
//TODO fix creation and editing UI styles through ant design
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
