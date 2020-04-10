import React from "react";
import "./ListaCurso.css";
import Curso from "./Curso";
import cursos from "./cursos.json"


function ListaCurso() {
  return (
    <div className="lista-curso">
     {
       cursos.map(curso => <Curso texto={curso.description} nombre={curso.title} imagen="https://static.platzi.com/media/learningpath/badges/b1024d96-eebe-4301-a3e4-df75daed2548.jpg" categorias={curso.categorias}/>)
     }
    </div>
  );
}

export default ListaCurso;
