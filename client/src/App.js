import React from "react";
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// We import all the components we need in our app
import Create from "./components/create";
import RecordList from "./components/recordList";
import "./App.css";
import Edit from "./components/edit";
import { Navbar } from "./components/navbar";

//TODO fix lack of update in redirect
//TODO fix creation and editing UI styles
//TODO use docker container instead of mongoDB atlas
//TODO differentiate form for type of properties (images, arrays, radios,...)
//TODO create generic testing for client and server through jest/react-testing-library

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RecordList} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
