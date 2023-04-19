import './BarraLateral.scss';
import Submenu from './Submenu/Submenu';

function BarraLateral() {
  return (
    <div className='barraLateral'>
      <div className='barraLateral-cabecalho'>

      </div>
      <div className='barraLateral-conteudo'>
        <Submenu texto="Cadastro" icone="cadastro" />
        <Submenu texto="Venda" icone="venda" />
        <Submenu texto="Produtos" icone="produtos" />
        <Submenu texto="Financeiro" icone='financeiro' />
        <Submenu texto="Relatórios" icone='relatorios' />
        <Submenu texto="Sistema" icones='sistema' />
      </div>
      <div className='barraLateral-rodape'>

      </div>
    </div>
  );
}

export default BarraLateral;
