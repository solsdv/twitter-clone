import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Sidebar from "./components/Sidebar.js";



function App() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}


export default App;