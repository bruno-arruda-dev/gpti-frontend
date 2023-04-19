import './Submenu.scss';

function Submenu({ texto, icone }) {
    return (

        <div className='submenu'>

            <div className={`submenu-icone ${icone}`} />
            <h4 className='submenu-texto'>{texto}</h4>

        </div>

    );
}

export default Submenu;