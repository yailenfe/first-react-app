import React from "react";
import "./Post.css";

function Post(props) {
  return (
    <div className="post">
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

export default Post;
