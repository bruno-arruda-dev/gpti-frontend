import { ListaUsuarios } from "../components/helpers/ListaUsuarios";

const VERIFICA_LOGIN_SENHA = (login, senha) => {
    console.log(`Rotina de verificação de login e senha: ${login}`);
    VERIFICA_LOGIN(login, senha);
}

const VERIFICA_LOGIN = (login, senha) => {
    console.log(`verificando usuário... ${login}`);

    const usuario = ListaUsuarios.find(usuario => usuario.usuario === login);
    if (usuario) {
        console.log(`Usuário encontrado...`);
        console.log(`Verificando senha...`);

        if (usuario.senha === senha) {
            console.log(`Senha correta!`);
            console.log(`LOGIN AUTORIZADO`);
        } else {
            console.log(`Senha incorreta!`);
            console.log(`LOGIN NEGADO`);
        }

    } else {
        console.log(`Usuário não encontrado`);
        console.log(`LOGIN NEGADO!`);
    }

}

export { VERIFICA_LOGIN_SENHA }