import { RiCloseCircleFill } from "react-icons/ri";
import { useGlobal } from '../GlobalProvider/GlobalProvider';
import { MdOutlineWatchLater, MdDeliveryDining  } from "react-icons/md";
import products from '../../products.json';
import { useEffect, useState } from "react";


export default function Menu() {

    const { quantities, handleIncrement, handleDecrement, setThereIsOrder } = useGlobal();
    const [checkoutBill, setCheckoutBill] = useState([]);
    
    useEffect(() => {

        const valores = Object.values(quantities);
        const existePedido = valores.some(value => value > 0);
        setThereIsOrder(existePedido);

        products.forEach((item) => {
            item.quantity = quantities[item.id] || 0;
        })
        let selectedItems = products.filter(item => item.quantity > 0);
        
        setCheckoutBill(selectedItems)
        /* console.log("------------SelectedItems-----------------", selectedItems) */
       /*  selectedItems = []; */
        
        
    }, [quantities]);


    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(checkoutBill));
        /* console.log("--------------Segundo Useffect - CHECKOUT------------", checkoutBill) */
        
    }, [checkoutBill, quantities])

    return (
        <section className="w-full h-full py-5 md:pb-10 lg:pb-20 md:px-10 lg:px-16 bg-white border-t-[1px] border-slate-200" id='/menu'>

            <section className="w-full h-40 mt-3 mb-14 px-10 pb-10 text-center border-b-[1px] border-black">
                <div className="w-full h-full text-4xl flex items-center justify-evenly gap-5">
                    <div className="w-fit h-full flex flex-col justify-center items-center gap-3">
                        <MdOutlineWatchLater />
                        <p className="text-xs lg:text-lg">Aberto das 06:00 hs - 21:00 hs</p>
                    </div>
                    <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center gap-3 mt-3 lg:mt-6">
                        <MdDeliveryDining />
                        <p className="text-xs lg:text-lg">Delivery acima de R$ 10,00 e a partir das 11:00 hs. Taxa de entrega: R$5,00.</p>
                    </div>
                </div>
            </section>

            <h2 className="text-[2.5rem] text-center uppercase">Cardápio</h2>
            <h3 className="text-[2rem] text-left my-10 ml-12">Lanches</h3>

            <section className="w-full h-full flex flex-wrap justify-center gap-2 md:gap-6">
    
                { products.map((item, index) => (
                    <div className="w-[240px] h-[310px] md:w-[260px] md:h-[350px] flex flex-col justify-center items-center gap-1 rounded-xl relative shadow-xl px-3" key={index}>
                        <button  onClick={() => handleIncrement(item.id, 1)} className="mt-5">
                            <img className='max-h-[120px] max-w-[200px] xl:max-h-[140px] xl:max-w-[220px] aspect-auto h-[170px] rounded-3xl select-none active:translate-y-[1px]' src={item.image} alt="" />
                        </button>
                        <p className="font-bold text-xl text-center mt-2 tracking-wider">{item.productName}</p>
                        <p>{`R$ ${(item.price).toFixed(2)}`}</p>
                        <div className="w-[90%] mt-2 flex items-center justify-center">
                            <p className="text-sm text-center">{item.description}</p>
                        </div>
                        <div className="">
                            <div className="absolute top-4 right-[218px] md:right-60">
                                <div className="menu-quantity">{quantities[item.id] || 0}</div>
                            </div>
                            <div className="absolute top-[14px] left-[214px] md:left-60 flex flex-col">
                                <button 
                                className="w-fit bg-white rounded-full cursor-pointer active:scale-x-[.96] text-blue-950"
                                onClick={() => handleDecrement(item.id, 1)}>
                                    <RiCloseCircleFill  className='text-[1.8rem]'/>
                                </button>
                            </div>
                        </div>
                    </div>
                )) }
                
            </section>

        </section>
    )
}
