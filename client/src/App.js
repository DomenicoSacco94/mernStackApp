import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// We import all the components we need in our app
import RecordList from "./components/recordList";
import "./App.css";
import { Navbar } from "./components/navbar";
import CreateSchema from "./components/createSchema";
import EditSchema from "./components/editSchema";

//TODO merge create and save components
//TODO enter json:ui
//TODO repackage to each docker container
//TODO adapt for more entities
//TODO fix creation and editing UI styles through ant design
//TODO add proper logging
//TODO create generic testing for client and server through jest/react-testing-library

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecordList} />
          <Route path="/createSchema" component={CreateSchema} />
          <Route path="/editSchema/:id" component={EditSchema} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
