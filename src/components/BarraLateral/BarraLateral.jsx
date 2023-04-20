import './BarraLateral.scss';
import Submenu from './Submenu/Submenu';

function BarraLateral() {
  return (
    <div className='barraLateral'>
      <div className='barraLateral-cabecalho'>

      </div>
      <div className='barraLateral-conteudo'>
        <Submenu texto="Contatos" icone="cadastro" link="Contatos" />
        <Submenu texto="Vendas" icone="vendas" link="Vendas"/>
        <Submenu texto="Produtos" icone="vendas" link="Produtos" />
        <Submenu texto="Financeiro" icone='financeiro' link="Financeiro" />
        <Submenu texto="Relatórios" icone='relatorios' link="Relatorios" />
        <Submenu texto="Sistema" icone='sistema' link="Sistema" />
      </div>
      <div className='barraLateral-rodape'>

      </div>
    </div>
  );
}

export default BarraLateral;
