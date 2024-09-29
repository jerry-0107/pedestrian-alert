import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { BlueAndRedLights } from './pages/blueAndRedLights';
import { CheckScreen } from './components/checkScreen';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/light' element={<BlueAndRedLights />}></Route>
        <Route path='/check' element={<CheckScreen />}></Route>

        <Route path='*' element={<Home />}></Route>

      </Routes>
    </>
  );
}

export default App;
