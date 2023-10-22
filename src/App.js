
import './App.css';
import Sidenav from './components/Sidenav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/analytics' element={<Analytics/>}></Route>
     <Route path='/settings' element={<Settings/>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
