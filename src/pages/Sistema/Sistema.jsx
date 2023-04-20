import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Sistema.scss';

function Sistema() {
  return (
    <>
      <BarraLateral />
      <div className='sistema'>
        <BarraSuperior>
          <h1>Sistema</h1>
        </BarraSuperior>
        Sistema
      </div>
    </>
  );
}

export default Sistema;