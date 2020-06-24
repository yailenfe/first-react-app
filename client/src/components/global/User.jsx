import React from "react";
import "./User.css";
import {Link} from "react-router-dom";

function User(props) {
  return (
    <div className="user">
      <img src={props.imagen} />
      <h3>{props.nombre}</h3>
      <p>{props.texto}</p>
      <Link to="/posts" className="button">VIEW POSTS</Link>
    </div>
  );
}

export default User;
