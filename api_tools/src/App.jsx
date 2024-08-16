import './App.css';
import Weather from './components/Weather';
import Trailer from './components/Trailer';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='weather' element={<Weather/>}></Route>
              <Route path='trailer' element={<Trailer/>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
