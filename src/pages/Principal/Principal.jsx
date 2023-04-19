import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Principal.scss';

function Principal() {
  return (
    <>
      <BarraLateral />
      <div className='principal'>
        <BarraSuperior>
          Conteúdo da barra superior aqui
        </BarraSuperior>
        Principal
      </div>
    </>
  );
}

export default Principal;