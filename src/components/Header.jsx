import '../App.css';
import logo from '../images/logo.png'

function Header() {
    let url = "#"
    // let im = 'https://i.ibb.co/mtYF4LZ/logo.png'
    return (
        <>
            <div className="header">
                <a href={url}>Iniciar Sesión</a>
            </div>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
        </>

    );
}

export default Header;