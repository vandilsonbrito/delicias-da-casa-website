import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
      </Routes>
   </>
  )
}

export default App
