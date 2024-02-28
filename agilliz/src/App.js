import './App.css';
import Logo from './components/brand/Logo'
import Navegacao from './components/Navegacao';


function App() {
  return (
    <div className="App">
      <div className='h-screen background'>
        <div className='flex'>

          <div className='w-full flex items-center justify-around'>
            <Navegacao></Navegacao>
          </div>
          <div className='paraDeDeixarOComputadorAbertoPorra'>
            <div><h2>CARALHO</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
