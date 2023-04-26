import './App.scss';
import Rotas from './routes/Rotas';
import { SessionProvider } from './context/SessaoContext';

function App() {

  return (
    <SessionProvider>
      <Rotas />
    </SessionProvider>
  )
}

export default App;
