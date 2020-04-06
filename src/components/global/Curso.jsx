import React from "react";
import "./Curso.css";

function Curso(props) {
  return (
    <div className="curso">
      <div>
        <img src={props.imagen} />
      </div>
      <div>
        <h3>{props.nombre}</h3>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}

export default Curso;
