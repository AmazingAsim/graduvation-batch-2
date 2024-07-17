import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Coin from './components/Coin';
import Rock from './components/Rock';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='coin' element={<Coin/>}></Route>
              <Route path='rock' element={<Rock/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
