import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './StripeCardCheckout.css'; // Importe o arquivo de estilos para aplicar os estilos do Stripe

export default function StripeCardCheckout() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd' }), // Modify as necessary
      });

      const data = await response.json();
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // Include any additional billing details
          },
        },
      });

      if (result.error) {
        setError(`Falha no pagamento: ${result.error.message}`);
      } else {
        setError(null);
        // Pagamento bem-sucedido, redirecione ou exiba uma mensagem de sucesso
      }
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      setError('Erro ao processar o pagamento. Por favor, tente novamente mais tarde.');
    }
  };

  const cardElementOptions = {
    style: {
      input: {
        backgroundColor: 'white'
      },
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
      },
    },
    theme: 'stripe',
  };

  
  return (
    <div className="stripe-form-container">
      <form onSubmit={handleSubmit} className="stripe-form">
        <CardElement options={cardElementOptions} />
        <button type="submit" disabled={!stripe} className="stripe-button">
          Pagar
        </button>
        {error && <div className="stripe-error">{error}</div>}
      </form>
    </div>
  );
}




/* import { useState } from 'react';
import { useStripe, useElements, CardElement, CardNumberElement,CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';


export default function StripeCardCheckout() {

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd' }), // Modify as necessary
      });

      const data = await response.json();
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // Include any additional billing details
          },
        },
      });

      if (result.error) {
        setError(`Falha no pagamento: ${result.error.message}`);
      } else {
        setError(null);
        // Pagamento bem-sucedido, redirecione ou exiba uma mensagem de sucesso
      }
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      setError('Erro ao processar o pagamento. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
    <form onSubmit={handleSubmit} className="w-80 h-80 flex flex-col bg-slate-400 p-6 rounded-lg shadow-md">
      <CardElement className="w-full h-40 mb-4 p-2 rounded-md border" />
      <button type="submit" disabled={!stripe} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Pagar
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  </div>
  );

}
 */