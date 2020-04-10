import React from "react";
import "./User.css";

function User(props) {
  return (
    <div className="user">
      <img src={props.imagen} />
      <h3>{props.nombre}</h3>
      <p>{props.texto}</p>
      <a className="button" href="#">
        VIEW DETAILS
      </a>
    </div>
  );
}

export default User;
