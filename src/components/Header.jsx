import '../App.css';
import logo from '../images/logo.png'

function Header() {
    let url = "https://inspiring-allen-c0dd8b.netlify.app/"

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