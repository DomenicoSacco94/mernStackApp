import React from "react";
// We use Route in order to define the different routes of our application
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
// We import all the components we need in our app
import Create from "./components/create";
import RecordList from "./components/recordList";
import './App.css';
import Edit from "./components/edit";
import {Navbar} from "./components/navbar";

function App() {
  return (
      <div>
          <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
          <RecordList />
        </Route>
        <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
          </Router>
      </div>
  );
}

export default App;
