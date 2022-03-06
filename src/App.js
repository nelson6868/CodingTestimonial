
import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Component/Nav";
import Container from "./Component/Container"

function App() {
  return (
    <div>
     <Nav/>
      < Container/>
     </div>
  );
}

export default App;
