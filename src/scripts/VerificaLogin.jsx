import { ListaUsuarios } from "../components/helpers/ListaUsuarios";
import { ListaEmpresas } from "../components/helpers/ListaEmpresas";

const VERIFICA_LOGIN_SENHA = ( login, senha, callbackUsuario, callbackEmpresas ) => {
    console.log(`Rotina de verificação de login e senha`);
    console.log(`verificando usuário...`);
    const usuario = ListaUsuarios.find(usuario => usuario.usuario === login);

    if (usuario) {
        console.log(`Usuário encontrado...`);
        console.log(`Verificando senha...`);

        if (usuario.senha === senha) {
            console.log(`Senha correta!`);
            console.log(`LOGIN AUTORIZADO`); // Em caso de login autorizado, algumas verificações e verificações são feitas

            // Rotina que verifica quais empresas o usuário pode acessar
            const empresasDoUsuario = usuario.empresas;
            const empresasAutorizadas = empresasDoUsuario.map(empresaId => {
                // Encontra a empresa correspondente ao ID no array ListaEmpresas
                const empresa = ListaEmpresas.find(empresa => empresa.id === empresaId);

                // Retorna o nome da empresa encontrada
                return empresa ? empresa.nome : null;
            });

            callbackUsuario(usuario.usuario);
            callbackEmpresas(empresasAutorizadas);

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
