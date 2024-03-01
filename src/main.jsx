import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './web/components/GlobalProvider/GlobalProvider.jsx';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OgtU5E8jhS5p6YeuL9LMuNG8hzFJdkjRo3IYuirlIPYvBUJ0CiN0vRoqajYgNx9V9UYP8UNrCgMeDkXV9OWgXL5004w06marw');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
