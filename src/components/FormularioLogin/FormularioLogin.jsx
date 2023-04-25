import { useState } from 'react';
import './FormularioLogin.scss';
import { VERIFICA_LOGIN_SENHA } from '../../scripts/VerificaLogin';

function FormularioLogin() {
    const [login, setLogin] = useState(""); // Estado que armazena o login digitado
    const [senha, setSenha] = useState(""); // Estado que armazena a senha digitada

    //Função responsável por enviar usuário e senha digitados para verificação
    const handleLogin = () => {
        console.log("Clicou no botão Entrar");
        console.log(`Enviando senha: ${senha}`);
        VERIFICA_LOGIN_SENHA(login, senha);
    };

    return (
        <div className='formularioLogin'>
            <h2>Bem vindo ao GPTI</h2>
            <div className='form'>
                <div className='dadosContainer'>
                    <div className='inputContainer usuario'>
                        <input 
                            type='text' 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required 
                        />
                    </div>
                    <div className='inputContainer senha'>
                        <input 
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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