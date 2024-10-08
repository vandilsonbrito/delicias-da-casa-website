import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import products from '../../products.json';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function CheckoutSuccess() {

    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const history = useNavigate();

    useEffect(() => {
      const handlePopState = () => {
        history.push('/');
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, [history]);

    useEffect(() => {
        const BASE_URL = 'https://backend-server-stripe.vercel.app'; /* 'https://backend-server-stripe.vercel.app'; *//*  http://localhost:3000 */
        const fecthData = async() => {
            try {
              setLoaded(true);
              let response = await axios.get(`${BASE_URL}/checkout-success`);
              response = await response.data[0];
              setLoaded(false);
              setData(response);
            }
            catch(err) {
              console.log("Error receiving data: ", err)
            }
        }
        fecthData()
    
    }, [])
    // Remove itens from local storage when checkout completed
    sessionStorage.clear();


  // Connect with Whatsapp
  /*   useEffect(() => {
    
        const completedMessage = `*Pronto, já recebemos seu pedido! Agora é só aguardar que estamos preparando e logo chegará até você.*\n\n Pedido: \n ${createOrderDescription(data)} \n\n *Subtotal*: R$${(data?.amount_subtotal / 100).toFixed(2)} \n *Entrega*: R$${(data?.total_details?.amount_shipping / 100).toFixed(2)} \n *Total*: R$${(data?.amount_total / 100).toFixed(2)} \n\n Nome: ${data?.customer_details?.name} \n Telefone: ${data?.customer_details?.phone} \n\n *Endereço de Entrega*:\n ${data?.customer_details?.address?.line1}, ${data?.customer_details?.address?.line2}, ${data?.customer_details?.address?.city}-${data?.customer_details?.address?.state}. \n\n Entrega estimada em 1 hora. \n\n *Delícias da Casa agradece a preferência!*`;
        let phone = data?.customer_details?.phone;
        phone = phone?.substring(1);
      


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
        
    
            // { msg: 'Messages sent' }
        }
        if(data) {
            sendingMessageToWpp(completedMessage, phone)
        }

    
    }, [data]) */  

    const createOrderDescription = (data) => {
        const cart = data?.cart ?? [];
        return cart.map((item, index) => (
            <p key={index}>{`${item.quantity}x - ${products[(item.id - 1)]?.productName}`}</p>
        ))
        
    };


    return (
      <> 
          <Header className={"w-full fixed z-50 bg-primary"}></Header> 
          
          {data ?  
            (<main className="w-full h-full min-h-screen flex flex-col justify-center items-center pt-28 lg:pt-20 pb-14">
                <div className="checkout-succes text-green-600  rounded-2xl flex flex-col justify-center items-center p-8 gap-2 py-8 text-lg">
                    <FaCheckCircle className="text-4xl"/>
                    <p className="text-center">Pagamento efetuado com sucesso!</p>
                    {/* <p className="mt-7 text-center">Cheque seu Whatsapp para mais informações do pedido.</p> */}
                </div>
                <section className="checkout-success w-[65%] min-w-[340px] max-w-[650px] bg-gray-200 text-black rounded-2xl flex flex-col justify-center items-left p-6 lg:p-8 gap-2 py-8 lg:text-lg relative"> 
                      <div className={`${loaded ? 'loader-wrapper' : ''}`}>
                          <span className={`${loaded ? 'loader' : ''}`}></span>
                      </div>  
                      <p>Pronto, já recebemos seu pedido! Agora é só aguardar que estamos preparando e logo chegará até você.</p><br/>
                    <div className="pl-2">
                        <div className="mb-3"><strong>Pedido</strong>:{createOrderDescription(data)}</div>
                        
                        <p className="mt-3"><strong>Subtotal</strong>{`: R$ ${(data?.amount_subtotal / 100 || 0).toFixed(2)}`}</p>
                        <p><strong>Taxa de Entrega</strong>{`: R$ ${(data?.total_details?.amount_shipping / 100 || 0).toFixed(2)}`}</p>
                        <p><strong>Total</strong>{`: R$ ${(data?.amount_total / 100 || 0).toFixed(2)}`}</p>
                        <p className="mt-3"><strong>Nome</strong>{`: ${data?.customer_details?.name || ''}`}</p>
                        <p><strong>Telefone</strong>{`: ${data?.customer_details?.phone || ''}`}</p>
                        <p className="mt-3"><strong>Entregar em:</strong></p>
                        <p><strong>Endereço</strong>{`: ${(data?.customer_details?.address?.line1 + ', ' + data?.customer_details?.address?.line2) || ''}`}</p>
                        <p><strong>Cidade/Estado</strong>{`: ${data?.customer_details?.address?.city || ''}-${data?.customer_details?.address?.state || ''}`}</p>
                    </div>
                </section>
          </main>) : 
          <div className="w-full h-screen flex flex-col items-center justify-center lg:text-xl" style={{ height: `calc(100vh - 96px)` }}
          >
            <p>Nenhum pedido registrado.</p>
          </div> }
          <Footer/>
      </>
  )
}
