import { Link } from 'react-router-dom';
import './ModalEscolherEmpresa.scss';

function ModalEscolherEmpresa({ usuario, empresas, mostrar, setIsLogado }) {

    const handleCloseModal = () => {
        setIsLogado(false);
    }

  return (
    <div className={mostrar ? 'modalEscolherEmpresa logado' : 'modalEscolherEmpresa deslogado'}>
        <div className='form'>
            <div className='closeModal' onClick={handleCloseModal}/>
            <div className='saudacoes-container'>
                <h2 className='saudacoes'>Olá {usuario},</h2>
                <p className='saudacoes-escolherEmpresa'>Escolha uma empresa para se conectar...</p>
            </div>
            {
                empresas.map((empresa, index) => (
                    <Link key={index} to="/Principal" className='link-empresa' onClick={() => handleEmpresaClick(empresa.id)}>
                        <div className='empresa'>{empresas[index]}</div>
                    </Link>
                ))
            }
        </div>
    </div>
  );
}

export default ModalEscolherEmpresa;
