import React from "react";
import "./Contacto.css";

function Contacto() {
    return (
        <div className="container">
            <form action="">
                <label className="label" htmlFor="name">Nombre</label>
                <br />
                <input className="input" type="text" name="nombre" />
                <br />
                <label className="label" htmlFor="email">Correo</label>
                <br />
                <input className="input" type="email" name="correo" />
                <br />
                <label className="label" htmlFor="email">Coméntanos</label>
                <br />
                <textarea className="inputo" name="" id="texto"  ></textarea>
                <br />
                <input  className="button" type="submit" value="Enviar" />
                <br />
            </form>
        </div>
    );
}

export default Contacto;
