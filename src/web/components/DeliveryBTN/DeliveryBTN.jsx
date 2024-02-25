import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function DeliveryBTN() {
  return (
    <div className="w-full h-40 bg-white flex flex-col items-center justify-center gap-2">
        <Link to='CartCheckout' className="w-80 h-14 bg-green-600 flex justify-center items-center gap-3 rounded-3xl text-2xl text-white hover:shadow-2xl hover:duration-200 hover:ease-in-out active:scale-[.98]">Fazer Pedido <FaWhatsapp className="text-2xl mb-1"/>
        </Link>
        <p className="text-xs">Delivery acima de R$ 10,00. Taxa de entrega: R$3,00</p>
    </div>
  )
}
