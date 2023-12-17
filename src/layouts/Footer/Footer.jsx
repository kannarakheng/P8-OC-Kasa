import { Link } from 'react-router-dom';
import './footer.css';

import LogoFooter from '../../assets/logo-footer.png';

function Footer () {
    return (
        <footer className="FooterCtr">
            <Link to="/">
                <img src={LogoFooter} alt="Logo de Kasa" />
            </Link>
        
        <p className="Footer__Text">© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;