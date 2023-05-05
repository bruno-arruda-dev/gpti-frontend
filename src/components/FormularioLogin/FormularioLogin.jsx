import { useState, useContext } from 'react';
import './FormularioLogin.scss';
import { VERIFICA_LOGIN_SENHA } from '../../scripts/VerificaLogin';
import { SessionContext } from '../../context/SessaoContext';
import ModalEscolherEmpresa from '../ModalEscolherEmpresa/ModalEscolherEmpresa';

function FormularioLogin() {
    const { setUsuarioSessao,   usuarioSessao,  setEmpresasSessao,
            empresasSessao,     setIsLogado,    isLogado
    } = useContext(SessionContext);
    const [login, setLogin] = useState(""); // Estado que armazena o login digitado
    const [senha, setSenha] = useState(""); // Estado que armazena a senha digitada
    const [loginVazio, setLoginVazio] = useState(""); // Armazena estado de login vazio
    const [senhaVazia, setSenhaVazia] = useState(""); // Armazena estado de senha vazia

    //Função responsável por enviar usuário e senha digitados para verificação
    const handleLogin = () => {
        console.log("Clicou no botão Entrar");

        if ( login === "" ) {
            setLoginVazio("loginVazio");
            if ( senha === "" ) {
                setSenhaVazia("senhaVazia");
            }
        } else if ( senha === "" ) {
            setSenhaVazia("senhaVazia");
        } else {
            VERIFICA_LOGIN_SENHA(login, senha, handleCallbackUsuario, handleCallbackEmpresas, handleCallbackIsLogado);
        };

    };

    // Atualiza o estado global com o usuário logado
    const handleCallbackUsuario = (usuario) => {
        setUsuarioSessao(usuario);
    }

    // Atualiza o estado global com as empresas autorizadas
    const handleCallbackEmpresas = (empresas) => {
        setEmpresasSessao(empresas);
    }

    // Atualiza o estado do login para logado ou deslogado
    const handleCallbackIsLogado = (value) => {
        if (value == true) {
            setIsLogado(value);
            console.log(`islogado true = ${isLogado} + ${value}`);
        }
    }

    // Verifica se Login está vazio
    const handleChangeLogin = (e) => {
        setLogin(e.target.value.toUpperCase());
        setLoginVazio("");
    }

    // Verifica se a senha está vazia
    const handleChangeSenha = (e) => {
        setSenha(e.target.value.toUpperCase());
        setSenhaVazia("");
    }

    return (
        <div className='formularioLogin'>
            <ModalEscolherEmpresa usuario={usuarioSessao} empresas={empresasSessao} mostrar={isLogado} setIsLogado={setIsLogado} />
            <h2>Bem vindo ao GPTI</h2>
            <div className='form'>
                <div className='dadosContainer'>
                    <div className={`inputContainer usuario ${loginVazio}`}>
                        <input
                            type='text'
                            value={login}
                            onChange={(e) => handleChangeLogin(e)}
                            required
                        />
                    </div>
                    <div className={`inputContainer senha ${senhaVazia}`}>
                        <input
                            type='password'
                            value={senha}
                            onChange={(e) => handleChangeSenha(e)}
                            required
                        />
                    </div>
                    <a>Esqueci a senha</a>
                </div>
                <button onClick={handleLogin}>ENTRAR</button>
            </div>
        </div>
    );
}

export default FormularioLogin;