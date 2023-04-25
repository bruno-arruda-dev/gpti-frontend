import { Link } from 'react-router-dom';
import './Login.scss';
import BarraPrincipal from '../../components/BarraPrincipal/BarraPrincipal';
import FormularioLogin from '../../components/FormularioLogin/FormularioLogin';

function Login() {
  return (
    <div className='login'>
      <BarraPrincipal />
      <div className='loginContainer'>
        <FormularioLogin />
      </div>
    </div>
  );
}

export default Login;