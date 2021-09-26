import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
let departamento = require('./data/departamento.json'); //Importo los departamentos
let municipio = require('./data/municipios.json'); //Importo los departamentos
let comercio = require('./data/comercio.json'); //Importo los comercios
let sucursales = require('./data/sucursales.json'); //Importo los comercios

    //Saco todos los nombres de departamento, para imprimirlos en el Dropdown
    const allDepartamentos = departamento.map((item)=> item.nombre)
    
    //Saco todos los nombres de departamento, para imprimirlos en el Dropdown
    const allComercios = comercio.map((item)=> item.nombre)


function App() {

    
    const [descripcionQueja, setDescripcionQueja] = useState("");

    const submitQueja = ()=>{
        Axios.post("http://localhost:5000/queja/insertar", {
            descripcionQueja: descripcionQueja
        }).then(() => {
            alert("Queja insertada exitosamente")
        })
    }


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

    //Estado para asignar el valor de los Departamentos
    const [munic, setMunic] = useState({});
    
    if (infoDepartamentos) {
        
        /**
         * Si viene la informacion del departamento seleccionado
         * Buscarme todos los municipios de ese departamento
         */

        const result = municipio.filter(value => value.idDepartamento === infoDepartamentos.id);
        // Esta variable contiene un array con los nombres de todos los municipios del departamento seleccionado, y la uso para imprimir los municipios en el droplist
        var allMunicipios = result.map((item)=> item.nombreMunicipio)
        
    } else {
        console.log("If adios");
    }

    const infoMunicipioDepartamento =  (valorSeleccionado)=>{
        //Aqui ontengo el nombre del municipio seleccionado por el usuario
        let valorAbuscar =  valorSeleccionado.value
        //Esta funcion me sirve para realizar la coincidencia de lo que quiero buscar, y
        const busqueda = (mucipioCoincide)=>{
            return mucipioCoincide.nombreMunicipio === valorAbuscar
        }
        //Aqui paso el array de municipios, y obtengo el 'id y el nombre' del municipio que el cliente selecciono
        const resultadoBusqueda = municipio.find(busqueda)
        return resultadoBusqueda
    };

    //Variable contenedora del resultado de la busqueda de municipios
    const infoMunicipios = infoMunicipioDepartamento(munic)

    // console.log(infoMunicipios);

    /**Municipios (fin)*/


    /**Comercios (inicio)*/
    const [comerci, setComercio] = useState({});

    /**Comercios (fin)*/


     /**Sucursales (inicio)*/

    if (infoMunicipios) {
        
        const buscarSucursal =  (valorSeleccionado)=>{
            //Aqui ontengo el id del Comercio seleccionado por el usuario
            let valorAbuscar =  valorSeleccionado.idMunicipio
            
            //Esta funcion me sirve para realizar la coincidencia de lo que quiero buscar, 
            const busqueda = (sucursalCoincide)=>{
                return sucursalCoincide.idMunicipio === valorAbuscar
            }
            //Aqui paso el array de Sucursales, y obtengo el 'id y el nombre' del Comercio que el cliente selecciono
            const resultadoBusqueda = sucursales.filter(busqueda)
            return resultadoBusqueda
        };
    
        //Variable contenedora del resultado de la busqueda de comercio
        var infoSucursales = buscarSucursal(infoMunicipios)
    
    }
 
     /**Sucursales (fin)*/

        //Saco todas las direcciones, para imprimirlos en el Dropdown
        const allDirection = infoSucursales ? infoSucursales.map((item)=> item.sucursalDireccion) : []

    /**Desabilitar el boton si no hay direccion */
    var estadoBtn = true;

    if(allDirection.length !== 0){
        estadoBtn = false
    }
    /**Desabilitar el boton si no hay direccion */

    /**Direccion de la sucursal seleccionada */
    const [sucur, setSucur] = useState({});

    console.log(sucur);

    /**Funcion para sacar el idSucursal seleccionado, para insertar la queja */

    if (infoSucursales) {
        
        const buscaridSucursal =  (valorSeleccionado)=>{
            //Aqui ontengo el id del Comercio seleccionado por el usuario
            let valorAbuscar =  valorSeleccionado.value
            
            //Esta funcion me sirve para realizar la coincidencia de lo que quiero buscar, 
            const busqueda = (sucursalCoincide)=>{
                return sucursalCoincide.sucursalDireccion === valorAbuscar
            }
            //Aqui paso el array de Sucursales, y obtengo el 'id y el nombre' del Comercio que el cliente selecciono
            const resultadoBusqueda = infoSucursales.filter(busqueda)
            return resultadoBusqueda
        };
    
          //Variable contenedora del idSucursal que me servira para insertar la queja
          const infoSucur = buscaridSucursal(sucur)
        console.log(infoSucur);
    }
    


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
                        value={munic}
                        onChange={(value)=>setMunic(value)}
                    />
                <label>Nombre del comercio: </label><br/>
                    <Dropdown
                        placeholder="Seleccione un Comercio"
                        options={allComercios}
                        value={comerci}
                        onChange={(value)=>setComercio(value)}
                    />
                <label>Direccion: </label><br/>
                    <Dropdown
                        placeholder="Seleccione la Direccion del Comercio"
                        options={allDirection}
                        value={sucur}
                        onChange={(value)=>setSucur(value)}
                    />
                <label>
                    Descripcion de la queja:
                </label>
                <textarea name="descripcionQueja" onChange={(e)=>{
                    setDescripcionQueja(e.target.value)
                }} />
                <button className="btn-enviar" onClick={submitQueja} disabled={estadoBtn}>Registrar queja</button>

                <br/>
                
            </div>

        </div>
    );
}

export default App;