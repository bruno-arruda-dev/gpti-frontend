import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  return (
    <div className='login'>
      <Link to="/Principal">
        Aqui será desenvolvida a página de LOGIN. Enquanto isso, clique aqui para visualizar as outras páginas.
      </Link>
    </div>
  );
}

export default Login;