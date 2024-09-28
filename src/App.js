import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { BlueAndRedLights } from './pages/blueAndRedLights';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/light' element={<BlueAndRedLights />}></Route>

      </Routes>
    </>
  );
}

export default App;
