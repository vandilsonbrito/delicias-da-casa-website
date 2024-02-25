import { Routes, Route } from 'react-router-dom';
import Home from './web/pages/Home/Home';
import CartCheckout from './web/pages/CartCheckout/CartCheckout';
import StripeCardCheckout from './web/pages/StripeCardCheckout/StripeCardCheckout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='CartCheckout' element={<CartCheckout/>}/>
        <Route path='CartCheckout/Checkout' element={<StripeCardCheckout/>}/>
      </Routes>
   </>
  )
}

export default App
