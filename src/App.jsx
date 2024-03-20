import { Routes, Route } from 'react-router-dom';
import Home from './web/pages/Home/Home';
import CartCheckout from './web/pages/CartCheckout/CartCheckout';
import StripeCardCheckout from './web/pages/StripeCardCheckout/StripeCardCheckout';
import CheckoutSuccess from './web/pages/CheckoutSuccess/CheckoutSuccess';
import NotFound from './web/pages/NotFound/NotFound';
import About from './web/pages/About/About';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart-checkout' element={<CartCheckout/>}/>
        <Route path='cart-checkout/stripe/create-checkout-session' element={<StripeCardCheckout/>}/>
        <Route path='checkout-success' element={<CheckoutSuccess/>}/>
        <Route path="about" element={<About />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </>
  )
}

export default App
