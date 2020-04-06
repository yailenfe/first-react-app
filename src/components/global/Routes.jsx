import React from "react";
import { Route, BrowserRouter as Router} from "react-router-dom";
import  Inicio from './Inicio';
import  Contacto from './Contacto';
import ListaCurso from './ListaCurso';
import Header from './Header';

function Routes() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Inicio} />
      <Route exact path="/contacto" component={Contacto} />
      <Route exact path="/cursos" component={ListaCurso} />
    </Router>
  );
}

export default Routes;
