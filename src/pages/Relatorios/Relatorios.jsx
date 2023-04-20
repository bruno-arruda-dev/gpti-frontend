import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Relatorios.scss';

function Relatorios() {
  return (
    <>
      <BarraLateral />
      <div className='relatorios'>
        <BarraSuperior>
          <h1>Relatorios</h1>
        </BarraSuperior>
        Relatorios
      </div>
    </>
  );
}

export default Relatorios;