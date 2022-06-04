import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
