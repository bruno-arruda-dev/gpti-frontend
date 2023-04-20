import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';

import './Vendas.scss';

function Vendas() {
    return (
        <>
            <BarraLateral />
            <div className='vendas'>
                <BarraSuperior>
                    <h1>Vendas</h1>
                </BarraSuperior>
                Vendas
            </div>
        </>
    );
}

export default Vendas;
