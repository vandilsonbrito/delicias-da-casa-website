import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';
import './CartCheckout.css';
import PayButton from "../../components/PayCardButton/PayCardButton";
import Header from "../../components/Header/Header";
import products from '../../products.json';
import { useEffect, useState } from "react";


function CartCheckout() {

    const { quantities, setQuantities, isPayButtonClicked } = useGlobal();
    const [total, setTotal] = useState(0);
    const [checkoutBill, setCheckoutBill] = useState([]);
    const [funcDisplayCheckout, setFunctionDisplayCheckout] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);

        if(Object.keys(quantities).length === 0 || (quantities)) {
            const cartFromStorage = JSON.parse(sessionStorage.getItem("cart"));
            const updatedQuantities = {};
            cartFromStorage.forEach((item) => { updatedQuantities[item.id] = item.quantity });
            
            setQuantities(updatedQuantities);    
        }
    }, [])

    useEffect(() => {
        // INTEGRATION WITH SESSION STORAGE
        const ImportCartFromSessionStorage = () => {
            const cartFromStorage = JSON.parse(sessionStorage.getItem("cart"));
            return cartFromStorage || [];
        };
        let cartStorage = ImportCartFromSessionStorage();

        if(cartStorage.length > 0) {
            cartStorage.forEach((item) => {
                products.find((product) => { 
                    if(product.id === item.id) {
                        product.quantity = item.quantity;
                    }
                })
                return products
            })

        }
          
        const selectedItems = products.filter(item => item.quantity > 0);
        
        const createProductCheckout = () => {
            let totalValue = 0;
            const checkoutItems = selectedItems.map((item, index) => {
                if (item.quantity === 0) return null;
                const subtotal = item.price * item.quantity;
                totalValue += subtotal;
                return (
                    <tr className="text-center border-b-[1px] border-white" key={index}>
                        <td>{item.productName}</td>
                        <td>{`R$ ${item.price.toFixed(2)}`}</td>
                        <td>{item.quantity}</td>
                        <td>{`R$ ${subtotal.toFixed(2)}`}</td>
                    </tr>
                );
            });
            setTotal(totalValue);
            return checkoutItems;
        };
        setFunctionDisplayCheckout(createProductCheckout);

        setCheckoutBill(selectedItems);
    }, [quantities])


   
    return (
        <>
            <Header className={'w-full fixed z-50 bg-primary'} setisNavActive={true} ></Header>
            <div className="w-full h-full min-h-screen flex flex-col items-center pt-[120px] lg:pt-28 pb-16 lg:px-20">
                <h1 className="text-3xl font-semibold">Carrinho</h1>
                    {
                        checkoutBill.length === 0 ? 
                        (<div className='flex flex-col items-center justify-center w-full h-[400px]'>
                            <p className="md:text-lg lg:text-2xl">Nenhum produto selecionado.</p>
                        </div>)
                        :
                        (<table className="w-[80%] lg:w-[60%] xl:w-[750px] text-white my-10 ">
                            <thead className="border-[2px] border-[#e5e9e2]">
                                <tr className="bg-slate-600">
                                    <th>Produto</th>
                                    <th>Preço Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className="border-[2px] border-[#e5e9e2]">
                                {funcDisplayCheckout}
                            </tbody>
                            <tfoot>
                                <tr className="text-white">
                                    <th className="bg-white border-white"></th>
                                    <th className="bg-white"></th>
                                    <th className="bg-slate-700">Total</th>
                                    <th className="bg-slate-700">{`R$ ${total.toFixed(2)}`}</th>
                                </tr>
                            </tfoot>
                        </table>)
                    }
                

                <div className='w-full h-full flex justify-center items-center lg:mt-5'>
                    <div className={`${checkoutBill.length === 0 ? 'hidden': 'flex'} flex-col lg:flex-row items-start gap-8 text-white`} >
                        <PayButton cartItems={checkoutBill}/>
                    </div>
                </div>
                <div className="w-fit h-full flex items-center gap-3 md:gap-8 mt-8 p-5 rounded-lg text-xs md:text-sm">
                    <div className="w-full h-full flex gap-2 items-center justify-center">
                        <FaRegCircleCheck className='md:text-lg' />
                        <p className='md:text-lg'>Qualidade</p>
                    </div>
                    <div className="w-full h-full flex gap-2 items-center justify-center">
                        <MdOutlineDeliveryDining className='text-base md:text-xl' />
                        <p className='md:text-lg'>Delivery</p>
                    </div>
                    <div className="w-full h-full flex gap-2 items-center justify-center ">
                        <IoShieldCheckmarkOutline className='text-base md:text-xl' />
                        <p className='w-full whitespace-nowrap  md:text-lg'>Pagamento Seguro</p>
                    </div>
                    
                </div>
                <div className={`${isPayButtonClicked ? 'loader-wrapper' : ''}`}>
                    <span className={`${isPayButtonClicked ? 'loader' : ''}`}></span>
                </div>
            </div>
        </>
    )
}

export default CartCheckout;
