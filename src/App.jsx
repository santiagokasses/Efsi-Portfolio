import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import MisCreaciones from './components/MisCreaciones';
import Favoritos from './components/Favoritos';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='/Home' element={<Home/>} />
            <Route path='/Info' element={<Info/>} />
            <Route path='/MisCreaciones' element={<MisCreaciones/>} />
            <Route path='/Favoritos' element={<Favoritos/>} />
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
