import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { BlueAndRedLights } from './pages/blueAndRedLights';
import { CheckScreen } from './components/checkScreen';
import { Marquees } from './pages/marquee';
import { WhiteLight } from './pages/whitelight';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/light' element={<BlueAndRedLights />}></Route>
        <Route path='/marquee' element={<Marquees />}></Route>
        <Route path='/whitelight' element={<WhiteLight />}></Route>

        <Route path='/check' element={<CheckScreen />}></Route>

        <Route path='*' element={<Home />}></Route>

      </Routes>
    </>
  );
}

export default App;
