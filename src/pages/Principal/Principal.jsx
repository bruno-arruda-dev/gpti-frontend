import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Principal.scss';

function Principal() {
  return (
    <>
      <BarraLateral />
      <div className='principal'>
        <BarraSuperior>
          <h1>Principal</h1>
        </BarraSuperior>
        Principal
      </div>
    </>
  );
}

export default Principal;