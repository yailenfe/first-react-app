import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contacto from "./Contacto";
import ListaPost from "./ListaPost";
import Header from "./Header";
import ListaUsers from "./ListaUsers";

function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={ListaUsers} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/posts" component={ListaPost} />
    </Router>
  );
}

export default Routes;
