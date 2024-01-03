import { Link } from 'react-router-dom';
import './error.css';

function Error() {
    return (
        <section className="ErrorCtr">
            <h1 className="Error__Title">404</h1>
            <p className="Error__Text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="LinkError">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error;