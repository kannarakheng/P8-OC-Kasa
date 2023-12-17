import { Link, NavLink } from 'react-router-dom';
import './header.css';

import Logo from '../../assets/logo.png';

function Header() {
    return (
        <nav className="HeaderCtr">
            <Link to="/">
                <img className="HomeLogo" alt="Logo de Kasa" src={Logo} />
            </Link>

            <div>
                <NavLink to="/" className="StyledLink">
                    Accueil
                </NavLink>

                <NavLink to="/about" className="StyledLink"> 
                    A Propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Header;