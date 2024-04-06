import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';
import './styles.css'
import PayButton from "../../components/PayCardButton/PayCardButton";
import Header from "../../components/Header/Header";
import products from '../../products.json';
import { useEffect } from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";




function CartCheckout() {

    const { numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex, setNumberOfMistoQuente, setNumberOfXTudo, setNumberOfSandMortadela, setNumberOfXSalada, setNumberOfBauru, setNumberOfSandPernil, setNumberOfAmericano, setNumberOfFrangoQueijo, setNumberOfXBacon, setNumberOfXCatupiry, setNumberOfSandAtum, setNumberOfSandSalame, setNumberOfMarmitex, setisNavActive } = useGlobal();

    const cart = [numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex];

    products.forEach((item, index) => {
        item.quantity = cart[index];
    })
    let showProductCheckout = [];
    let total = 0; 

    // START TO CALCULATE THE AMOUNT --------------------------------------------------------------------------
    let billIndex = cart.map((item, index) => { if(item > 0) return index });
    billIndex = billIndex.filter(function( element ) {
        return element !== undefined;
     });

    // INTEGRATION WITH LOCAL  STORAGE
    const ImportCartFromLocalStorage = () =>{
        return JSON.parse(localStorage.getItem("cart"));
    }
    let checkoutBill = ImportCartFromLocalStorage() || [];
    
    const settingCartQuantityFromLocalStorage = () => {
        checkoutBill.forEach(item => {
         
            const productsItem = products.find(product => product.id === item.id);
            if(productsItem && productsItem.quantity > 0) {
                item.quantity = productsItem.quantity;
            }
        });
    }
    settingCartQuantityFromLocalStorage()

    const AddItemCart = () => {
            billIndex.forEach(index => {
                if (index !== undefined) {
                    const itemToAdd = products[index];
                    const existingItem = checkoutBill.find(item => item.productName === itemToAdd.productName);
                    if (!existingItem) {
                        checkoutBill.push(itemToAdd);
                    } 
                    else if (itemToAdd.quantity > 0){
                        existingItem.quantity = itemToAdd.quantity;       
                    }
                }  
            });
        return checkoutBill;
    }
    AddItemCart()

    const removeItemCart = () => {  
        const filteredproducts = products.filter((item) => item.quantity > 0);
        filteredproducts.length !== 0 ? checkoutBill = filteredproducts : null

        return checkoutBill;
    };
    removeItemCart()
    
    // Setting the quantity of items in the cart to be displayed on home page
    const settingQuantity = () => {
        checkoutBill.map((item) => {
            const id = item.id;

            switch(id) {
                case 1: setNumberOfMistoQuente(item.quantity); break;
                case 2: setNumberOfXTudo(item.quantity); break;
                case 3: setNumberOfSandMortadela(item.quantity); break;
                case 4: setNumberOfXSalada(item.quantity); break;
                case 5: setNumberOfBauru(item.quantity); break;
                case 6: setNumberOfSandPernil(item.quantity); break;
                case 7: setNumberOfAmericano(item.quantity); break;
                case 8: setNumberOfFrangoQueijo(item.quantity); break;
                case 9: setNumberOfXBacon(item.quantity); break;
                case 10: setNumberOfXCatupiry(item.quantity); break;
                case 11: setNumberOfSandAtum(item.quantity); break;
                case 12: setNumberOfSandSalame(item.quantity); break;
                case 13: setNumberOfMarmitex(item.quantity); break;
            }
        })
    }
    settingQuantity();
    
    // INTEGRATION WITH LOCAL  STORAGE
    const saveCartInLocalStorage = () => {  
        return localStorage.setItem("cart", JSON.stringify(checkoutBill))
    }
    saveCartInLocalStorage(checkoutBill)


    const createProductCheckout = () => {
        checkoutBill.map((item, index) => {
            item.quantity === 0 ? null :
            showProductCheckout.push(
                <tr className="text-center border-b-[1px] border-white" key={index}>
                    <td>{item.productName}</td>
                    <td>{`R$ ${item.price.toFixed(2)}`}</td>
                    <td>{item.quantity}</td>
                    <td>{`R$ ${(item.price * item.quantity).toFixed(2)}`}</td>
                </tr>
            );
            total += (item.price * item.quantity)
        })

        return showProductCheckout
    }


    return (
        <>
            <Header className={'w-full h-24'} setisNavActive={false} ></Header>
            <div className="w-full h-full min-h-screen flex flex-col items-center pt-10 lg:pt-20 pb-16 lg:px-20">
                <h1 className="text-3xl">Checkout</h1>
            
                    {
                        checkoutBill.length === 0 ? 
                        (<div className='flex flex-col items-center justify-center w-full h-screen'>
                            <p className="md:text-lg lg:text-2xl">Você não escolheu nenhum produto.</p>
                        </div>)
                        :
                        (<table className="w-[90%] lg:w-[60%] text-white my-10 ">
                            <thead>
                                <tr className="bg-slate-700">
                                    <th>Produto</th>
                                    <th>Preço Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {createProductCheckout()}
                                <tr>
                                    <th className="bg-white border-white"></th>
                                    <th className="bg-white"></th>
                                    <th className="bg-slate-700">Total</th>
                                    <th className="bg-slate-700">R$ {total.toFixed(2)}</th>
                                </tr>
                            </tbody>
                        </table>)
                    }
                

                <div className='w-full h-full bg-white flex justify-center items-center lg:mt-5'>
                    <div className="flex flex-col lg:flex-row items-start gap-8 text-white">
                        <PayButton cartItems={checkoutBill}/>
                        {/* <Link className="w-80 h-fit px-6 py-3 rounded-xl bg-green-600 text-2xl flex justify-center items-center gap-5">
                            Pagar com Dinheiro <GiMoneyStack className="text-3xl"/>
                        </Link> */}
                    </div>
                </div>
                <div className="w-fit h-full flex items-center gap-3 md:gap-8 mt-8 p-5 rounded-lg text-sm">
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

            </div>
        </>
    )
}

export default CartCheckout;
