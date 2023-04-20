import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Financeiro.scss';

function Financeiro() {
  return (
    <>
      <BarraLateral />
      <div className='financeiro'>
        <BarraSuperior>
          <h1>Financeiro</h1>
        </BarraSuperior>
        Financeiro
      </div>
    </>
  );
}

export default Financeiro;