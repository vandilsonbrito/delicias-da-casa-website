import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './StripeCardCheckout.css'; // Importe o arquivo de estilos para aplicar os estilos do Stripe

const BASE_URL = 'https://backend-server-stripe.vercel.app'; /* 'https://backend-server-stripe.vercel.app'; */
  
export default function StripeCardCheckout() {
  const stripe = useStripe();
  const elements = useElements();
  const [, setError] = useState(null);

   async () => {

    if (!stripe || !elements) {
      return;
    }

    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(`${BASE_URL}/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd' }),
      });

      const data = await response.json();
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            
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

}

