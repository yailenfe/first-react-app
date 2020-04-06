import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/cursos">
          <li>Cursos</li>
        </Link>
        <Link to="/contacto">
          <li>Contacto</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
