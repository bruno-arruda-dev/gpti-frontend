import { Link } from 'react-router-dom';
import './Submenu.scss';

function Submenu({ texto, icone, link }) {
    return (

        <Link  className='submenu' to={`/${link}`}>
                <div className={`submenu-icone icone-${icone}`} />
                <h4 className='submenu-texto'>{texto}</h4>
        </Link>

    );
}

export default Submenu;