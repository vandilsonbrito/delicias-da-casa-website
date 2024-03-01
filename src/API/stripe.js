import express from 'express';
import Stripe from 'stripe';
import { config as configDotenv } from 'dotenv';

configDotenv();

// eslint-disable-next-line no-undef
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const stripe = Stripe(STRIPE_API_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { cartItems } = req.body;
    const lineItems = cartItems.map((item) => ({
        price_data: {
            currency: 'brl',
            product_data: {
                name: item.productName,
            },
            unit_amount: parseInt(item.price * 100),
        },
        quantity: item.quantity,
    }));

    console.log(lineItems);

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:5173/checkout-success`,
        cancel_url: 'http://localhost:5173/CartCheckout',
    });

    res.send({ url: session.url });
});


export default router