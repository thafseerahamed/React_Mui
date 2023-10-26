
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import StBarChart from './Test/StBarChart';
import SyncStBarchart from './Test/SyncStBarchart';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/ab' element={<StBarChart />}></Route>
          <Route path='/sy' element={<SyncStBarchart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
