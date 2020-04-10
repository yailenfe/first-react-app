import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Nombre</label><br/>
        <input type="text" name="nombre"/><br/>
        <label htmlFor="edad">Edad</label><br/>
        <input type="nomber" name="edad" /><br/>
        <label htmlFor="email">correo</label><br/>
        <input type="email" name="correo" /><br/>
        <input type="submit"  value="submit"/><br/>
      </form>
    </div>
  );
}

export default Contacto;
