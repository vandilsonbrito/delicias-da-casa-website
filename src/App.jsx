import { Routes, Route } from 'react-router-dom';
import Home from './web/pages/Home/Home';
import CartCheckout from './web/pages/CartCheckout/CartCheckout';
import StripeCardCheckout from './web/pages/StripeCardCheckout/StripeCardCheckout';
import CheckoutSuccess from './web/pages/CheckoutSuccess/CheckoutSuccess';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='CartCheckout' element={<CartCheckout/>}/>
        <Route path='CartCheckout/stripe/create-checkout-session' element={<StripeCardCheckout/>}/>
        <Route path='checkout-success' element={<CheckoutSuccess/>}/>
      </Routes>
   </>
  )
}

export default App
