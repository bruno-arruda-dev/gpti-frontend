import BarraLateral from '../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../components/BarraSuperior/BarraSuperior';
import './Produtos.scss';

function Produtos() {
  return (
    <>
      <BarraLateral />
      <div className='produtos'>
        <BarraSuperior>
          <h1>Produtos</h1>
        </BarraSuperior>
        Produtos
      </div>
    </>
  );
}

export default Produtos;