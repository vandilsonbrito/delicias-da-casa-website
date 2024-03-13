import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import products from '../../products.json';


export default function CheckoutSuccess() {

  console.log(products)
  
  const [data, setData] = useState([]);

  useEffect(() => {
      const BASE_URL = 'https://rich-shift.cyclic.app'; /* 'https://rich-shift.cyclic.app'; *//*  http://localhost:3000 */
      const fecthData = async() => {
          try {
            let res = await axios.post(`${BASE_URL}/checkout-success`);
            res = await res.data[0];
            setData(res);
          }
          catch(err) {
            console.log("Error receiving data: ", err)
          }
      }
      fecthData()

  }, [])
  console.log(data)

// Connect with Whatsapp
/*   useEffect(() => {
  
      const completedMessage = `*Pronto, já recebemos seu pedido! Agora é só aguardar que estamos preparando e logo chegará até você.*\n\n Pedido: \n ${createOrderDescription(data)} \n\n *Subtotal*: R$${(data?.amount_subtotal / 100).toFixed(2)} \n *Entrega*: R$${(data?.total_details?.amount_shipping / 100).toFixed(2)} \n *Total*: R$${(data?.amount_total / 100).toFixed(2)} \n\n Nome: ${data?.customer_details?.name} \n Telefone: ${data?.customer_details?.phone} \n\n *Endereço de Entrega*:\n ${data?.customer_details?.address?.line1}, ${data?.customer_details?.address?.line2}, ${data?.customer_details?.address?.city}-${data?.customer_details?.address?.state}. \n\n Entrega estimada em 1 hora. \n\n *Delícias da Casa agradece a preferência!*`;
      let phone = data?.customer_details?.phone;
      phone = phone?.substring(1);
      console.log(completedMessage, phone)


      const sendingMessageToWpp = async(message, phone) => {
          const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"
      
          const response = await fetch(GZAPPY_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'user_token_id': '58e841fa-a1b1-415a-8b72-75d61fc6a3c0'
            },
            body: JSON.stringify({
              instance_id: '7WEFKS8KPBBQD9SX1HMMJCX0',
              instance_token: 'e812f3f3-8465-40c6-af01-1ea2a11a86cc',
              message: [message],
              phone: [phone]
            })
          })
      
          const data = await response.json()
      
          console.log(data)
          // { msg: 'Messages sent' }
      }
      if(data) {
          sendingMessageToWpp(completedMessage, phone)
      }

      console.log(data)
  }, [data]) */  

  const createOrderDescription = (data) => {
      const cart = data?.cart ?? [];
      return cart.map((item, index) => (
          <p key={index}>{item.quantity}x {products[index].productName}</p>
      ))
  };


  return (
    <>
        <Header></Header> 
        <div className="w-full h-full flex flex-col justify-center items-center pt-10 pb-14">
            <div className="checkout-succes text-green-600 rounded-2xl flex flex-col justify-center items-center p-8 gap-2 py-8 text-lg">
                <FaCheckCircle className="text-4xl"/>
                <p className="text-center">Pagamento efetuado com sucesso!</p>
                {/* <p className="mt-7 text-center">Cheque seu Whatsapp para mais informações do pedido.</p> */}
            </div>
            <div className="checkout-success w-[65%] min-w-[340px] max-w-[650px] bg-gray-200 text-black rounded-2xl flex flex-col justify-center items-left p-8 gap-2 py-8 lg:text-lg">   
                  <p>Pronto, já recebemos seu pedido! Agora é só aguardar que estamos preparando e logo chegará até você.</p><br/>
                <div className="pl-2">
                    <div className="mb-3"><strong>Pedido</strong>:{createOrderDescription(data)}</div>
                    
                    <p className="mt-3"><strong>Subtotal</strong>{`: R$${(data?.amount_subtotal / 100).toFixed(2)}`}</p>
                    <p><strong>Taxa de Entrega</strong>{`: R$${(data?.total_details?.amount_shipping / 100).toFixed(2)}`}</p>
                    <p><strong>Total</strong>{`: R$${(data?.amount_total / 100).toFixed(2)}`}</p>
                    <p className="mt-3"><strong>Nome</strong>{`: ${data?.customer_details?.name}`}</p>
                    <p><strong>Telefone</strong>{`: ${data?.customer_details?.phone}`}</p>
                    <p className="mt-3"><strong>Endereço de Entrega:</strong></p>
                    <p><strong>Rua/N&#8226;</strong>{`: ${data?.customer_details?.address?.line1}`}</p>
                    <p><strong>Bairro</strong>{`: ${data?.customer_details?.address?.line2}`}</p>
                    <p><strong>Cidade/Estado</strong>{`: ${data?.customer_details?.address?.city}-${data?.customer_details?.address?.state}`}</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
