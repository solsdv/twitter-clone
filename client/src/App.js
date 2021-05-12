import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Hello from "./components/hello";
import Landing from "./components/landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/hello" component={Hello}/>
      </Switch>
    </Router>
  )
}


export default App;