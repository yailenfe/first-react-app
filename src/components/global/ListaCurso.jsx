import React from "react";
import "./ListaCurso.css";
import Curso from "./Curso";

function ListaCurso() {
  return (
    <div className="lista-curso">
      <Curso
       texto="etehdnjjnd acavagahayhahaj jssj"
        nombre="React"
        imagen="https://static.platzi.com/media/learningpath/badges/b1024d96-eebe-4301-a3e4-df75daed2548.jpg"
      />
      <Curso
        texto="etehdnjjnd papapappaap jssj"
        nombre="Angular"
        imagen="https://static.platzi.com/media/learningpath/badges/1318-9835c3f1-72e7-42c9-a87c-44605904d7ba.png"
      />
      <Curso
        nombre="Vue"
        imagen="https://static.platzi.com/media/learningpath/badges/0bc68f35-a93a-44ae-ae39-ff306c5e4315.jpg"
        texto="etehdnjjnd hsnjhsjsjsjs jssj"
      />
    </div>
  );
}

export default ListaCurso;
