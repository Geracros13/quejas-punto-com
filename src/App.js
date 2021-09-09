import './App.css';
// import Header from './components/Header';

function App() {
    return ( 
        <div className="container-queja">
            <form className="form-envio-queja">
                <label>
                    Nombre del comercio: 
                <input type="text" />
                </label>
                <label>
                    Direccion: 
                <input type="text" />
                </label>
                <label>
                    Departamento: 
                <input type="text" />
                </label>
                <label>
                    Municipio: 
                <input type="text" />
                </label>
                <label>
                    Descripcion de la queja:
                </label>
                <textarea />
                <input className="btn-enviar" type="submit" value="Registrar queja" />
            </form>
        </div>
    );
}

export default App;