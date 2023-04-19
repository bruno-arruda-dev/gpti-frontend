import './BarraLateral.scss';
import Submenu from './Submenu/Submenu';

function BarraLateral() {
  return (
    <div className='barraLateral'>
      <div className='barraLateral-cabecalho'>

      </div>
      <div className='barraLateral-conteudo'>
        <Submenu texto="Cadastro" />
        <Submenu texto="Venda" />
        <Submenu texto="Produto" />
        <Submenu texto="Financeiro" />
        <Submenu texto="Relatório" />
        <Submenu texto="Sistema" />
      </div>
      <div className='barraLateral-rodape'>

      </div>
    </div>
  );
}

export default BarraLateral;
