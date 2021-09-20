import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";

function App() {

    const [descripcionQueja, setDescripcionQueja] = useState("");


    const submitQueja = ()=>{
        Axios.post("http://localhost:5000/queja/insertar", {
            descripcionQueja: descripcionQueja
        }).then(() => {
            alert("Queja insertada exitosamente")
        })
    }


    return ( 
        <div className="container-queja">
            <div className="form-envio-queja">
                <label>
                    Departamento: 
                <input type="text" />
                </label>
                <label>
                    Municipio: 
                <input type="text" />
                </label>
                <label>
                    Nombre del comercio: 
                <input type="text" />
                </label>
                <label>
                    Direccion: 
                <input type="text" />
                </label>
                <label>
                    Descripcion de la queja:
                </label>
                <textarea name="descripcionQueja" onChange={(e)=>{
                    setDescripcionQueja(e.target.value)
                }} />
                <button className="btn-enviar" onClick={submitQueja}>Registrar queja</button>
            </div>
        </div>
    );
}

export default App;