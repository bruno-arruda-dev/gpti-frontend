import BarraLateral from '../../components/BarraLateral/BarraLateral';
import './Contatos.scss';

function Contatos() {
  return (
    <>
      <BarraLateral />
      <div className='contatos'>
        <BarraSuperior>
          Conteúdo da barra superior aqui
        </BarraSuperior>
        Contatos
      </div>
    </>
  );
}

export default Contatos;
