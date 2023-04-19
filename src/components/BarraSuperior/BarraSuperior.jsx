import './BarraSuperior.scss';

function BarraSuperior({ children }) {
  return (
    <div className='barraSuperior'>
      {children}
    </div>
  );
}

export default BarraSuperior;