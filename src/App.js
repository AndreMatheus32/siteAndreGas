
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Seguranca from './components/segurança';
import Produtos from './components/Produtos';
import Footer from './components/footer';
import Map from './components/Map';

import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <img src="https://cdn.supergasbras.com.br/-/media/sites/brazil/logo/supergasbras-logo.svg?h=1&w=1&la=pt-BR&hash=3F1C9464DCA3AA3EAAC3801954BDF436" height={'50px'} width={'100%'} alt="Logo Supergasbras"></img>
      <BrowserRouter>
        <NavBar/>
        <Home/>
        <Map/>
        <Seguranca/>
        <Produtos />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
