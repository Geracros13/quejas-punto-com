import '../App.css';
import logo from '../images/logo.png'

function Header() {
    let url = "#"

    return (
        <>
            <div className="header">
                <a href={url}>Ver Estadisticas</a>
            </div>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
        </>

    );
}

export default Header;