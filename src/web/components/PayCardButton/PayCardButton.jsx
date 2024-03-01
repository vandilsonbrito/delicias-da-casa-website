import axios from 'axios';
import { FaCreditCard } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const PayButton = ({ cartItems }) => {
    
    const handleCheckout = () => {
        console.log(cartItems)
        axios
        .post('http://localhost:3001/CartCheckout/stripe/create-checkout-session', {
            cartItems,
        })
        .then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        })
        .catch((err) => console.log(err.message))
    };

    return (
        <button onClick={()=> handleCheckout()} className="w-80 h-fit px-6 py-3 rounded-xl bg-blue-800 text-2xl flex gap-5 justify-center items-center"> Pagar com Cartão <FaCreditCard className="text-2xl"/></button>
    )
}

export default PayButton;