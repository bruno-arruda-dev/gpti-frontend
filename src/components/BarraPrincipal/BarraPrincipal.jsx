import SocialMediaBotao from '../SocialMediaBotao/SocialMediaBotao';
import './BarraPrincipal.scss';

function BarraPrincipal() {
  return (
    <div className='barraPrincipal'>
      <div className='barraPrincipal-logomarca' />

        <div className='barraPrincipal-socialMedia'>
            <SocialMediaBotao nome='Instagram' href="#" />
            <SocialMediaBotao nome='Facebook' href="#" />
            <SocialMediaBotao nome='Linkedin' href="#" />
            <SocialMediaBotao nome='Website' href="#" />
            <SocialMediaBotao nome='Whatsapp' href="#" />
        </div>

        <div className='barraPrincipal-rodape'>
            <p className='versao'>Versão: 0.0.0.1</p>
            <p className='copyright'>Todos os direitos reservados</p>
        </div>

    </div>
  );
}

export default BarraPrincipal;
