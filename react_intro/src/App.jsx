import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Games from './pages/Games';
import Coin from './pages/Coin';
import Paper from './pages/Paper';
function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='about' element={<About/>} ></Route>
                <Route path='contact' element={<Contact/>} ></Route>
                <Route path='games' element={<Games/>} >
                    <Route index element={<Coin/>}></Route>
                    <Route path='paper' element={<Paper/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;

