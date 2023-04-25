import './SocialMediaBotao.scss';

function SocialMediaBotao({ nome, link }) {
    return (
        <a
            className={`socialMediaBotao ${nome}`}
            title={nome}
            href={link}
        />
    );
}

export default SocialMediaBotao;
