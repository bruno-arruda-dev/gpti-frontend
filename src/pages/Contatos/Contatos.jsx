import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Contatos.scss';

function Contatos() {
  return (
    <>
      <BarraLateral />
      <div className='contatos'>
        <BarraSuperior>
          <h1>Contatos</h1>
        </BarraSuperior>
        Contatos
      </div>
    </>
  );
}

export default Contatos;
