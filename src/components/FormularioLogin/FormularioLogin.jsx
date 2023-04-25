import './FormularioLogin.scss'

function FormularioLogin() {
  return (
    <div className='formularioLogin'>
      <h2>Bem vindo ao GPTI</h2>
      <form>
        <div className='dadosContainer'>
            <div className='inputContainer usuario'><input type='text' required /></div>
            <div className='inputContainer senha'><input type='password' required /></div>
            <a>Esqueci a senha</a>
        </div>
        <button>ENTRAR</button>
      </form>
    </div>
  );
}

export default FormularioLogin;