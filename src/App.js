import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
let departamento = require('./data/departamento.json'); //Importo los departamentos
let municipio = require('./data/municipios.json'); //Importo los departamentos

    //Saco todos los nombres de departamento, para imprimirlos en el Dropdown
    const allDepartamentos = departamento.map((item)=> item.nombre)


function App() {

    
    // const [descripcionQueja, setDescripcionQueja] = useState("");

    // const submitQueja = ()=>{
    //     Axios.post("http://localhost:5000/queja/insertar", {
    //         descripcionQueja: descripcionQueja
    //     }).then(() => {
    //         alert("Queja insertada exitosamente")
    //     })
    // }


    /**Departamento (inicio)*/

    //Estado para asignar el valor de los Departamentos
    const [inicio, setInicio] = useState({});
    //Funcion para obtener el objeto del departamento seleccionado
    const idDepartamento =  (valorSeleccionado)=>{
        //Aqui ontengo el nombre del Departamento seleccionado por el usuario
        let valorAbuscar =  valorSeleccionado.value
        //Esta funcion me sirve para realizar la coincidencia de lo que quiero buscar, y
        const busqueda = (departametoCoincide)=>{
            return departametoCoincide.nombre === valorAbuscar
        }
        //Aqui paso el array de departamentos, y obtengo el 'id y el nombre' del departamento que el cliente selecciono
        const resultadoBusqueda = departamento.find(busqueda)
        return resultadoBusqueda
    };
    //Variable contenedora del resultado de la busqueda de departamento
    const infoDepartamentos = idDepartamento(inicio)

    /**Departamento (fin)*/

    
    /**Municipios (inicio)*/

    if (infoDepartamentos) {
        const result = municipio.filter(value => value.idDepartamento === infoDepartamentos.id);

        var allMunicipios = result.map((item)=> item.nombreMunicipio)
        

        console.log(allMunicipios);
    } else {
        console.log("If adios");
    }

    /**Municipios (fin)*/

    return ( 
        <div className="container-queja">
            <div className="form-envio-queja">
                <label>Departamento: </label><br/>
                    <Dropdown
                        placeholder="Seleccione un Departamento"
                        options={allDepartamentos}
                        value={inicio}
                        onChange={(value)=>setInicio(value)}
                    />

                <label>Municipio: </label><br/>
                <Dropdown
                        placeholder="Seleccione un Municipio"
                        options={allMunicipios}
                        // value={inicio}
                        // onChange={(value)=>setInicio(value)}
                    />
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
                {/* <textarea name="descripcionQueja" onChange={(e)=>{
                    setDescripcionQueja(e.target.value)
                }} />
                <button className="btn-enviar" onClick={submitQueja}>Registrar queja</button> */}

                <br/>
                
            </div>

        </div>
    );
}

export default App;