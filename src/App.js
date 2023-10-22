
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Analytics from './pages/Analytics';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
