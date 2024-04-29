import axios from 'axios';
import { FaCreditCard } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';


PayCardButton.propTypes = {
    cartItems: PropTypes.array,
}

export default function PayCardButton({ cartItems }) {
    /* console.log("CartITEMS", cartItems) */


    const { setIsPayButtonClicked } = useGlobal();

    const BASE_URL = 'https://lonely-red-wasp.cyclic.app'; /* 'https://lonely-red-wasp.cyclic.app'; *//*  http://localhost:3000 */
    
    const handleCheckout = () => {
        setIsPayButtonClicked(true);
        axios
        .post(`${BASE_URL}/cart-checkout/stripe/create-checkout-session`, {
            cartItems,
            
        })
        .then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
                setIsPayButtonClicked(false);
            }
        })
        .catch((err) => console.log(err.message))
    };

    return (
        <div className='relative'>
            <button onClick={()=> handleCheckout()} className="w-80 h-fit px-6 py-3 rounded-xl bg-blue-900 text-2xl flex gap-5 justify-center items-center active:scale-x-[.98]"> Pagar com Cartão <FaCreditCard className="text-2xl"/></button>
        </div>
    )
}

