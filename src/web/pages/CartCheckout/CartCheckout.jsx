/* import { FaCreditCard } from "react-icons/fa6"; */
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo-delicias-da-casa-branco.png';
import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';
import './styles.css'
import PayButton from "../../components/PayCardButton/PayCardButton";
import { useEffect } from "react";


function CartCheckout() {

    const { numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex, setNumberOfMistoQuente, setNumberOfXTudo, setNumberOfSandMortadela, setNumberOfXSalada, setNumberOfBauru, setNumberOfSandPernil, setNumberOfAmericano, setNumberOfFrangoQueijo, setNumberOfXBacon, setNumberOfXCatupiry, setNumberOfSandAtum, setNumberOfSandSalame, setNumberOfMarmitex } = useGlobal();

    const cart = [numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex];

    const menu = [ 
        { id: 1, productName: 'Misto Quente', price: 5.99, quantity: numberOfMistoQuente} , 
        { id: 2, productName: 'X-Tudo', price: 23.99, quantity: numberOfXTudo},  
        { id: 3, productName: 'Sanduíche de Mortadela', price: 17.99, quantity: numberOfSandMortadela}, 
        { id: 4, productName: 'X-Salada', price: 17.99, quantity: numberOfXSalada},  
        { id: 5, productName: 'Bauru', price: 22.50, quantity: numberOfBauru}, 
        { id: 6, productName: 'Sanduíche de Pernil', price: 21.99, quantity: numberOfSandPernil}, 
        { id: 7, productName: 'Americano', price: 20.99, quantity: numberOfAmericano}, 
        { id: 8, productName: 'Frango c/ Qeijo', price: 18.99, quantity: numberOfFrangoQueijo}, 
        { id: 9, productName: 'X Bacon', price: 19.99, quantity: numberOfXBacon}, 
        { id: 10, productName: 'X Catupiry', price: 20.99, quantity: numberOfXCatupiry}, 
        { id: 11, productName: 'Sanduíche de Atum', price: 24.99, quantity: numberOfSandAtum}, 
        { id: 12, productName: 'Sanduíche de Salame', price: 20.00, quantity: numberOfSandSalame}, 
        { id: 13, productName: 'Marmitex', price: 15.00, quantity: numberOfMarmitex} 
    ]
 
    let showProductCheckout = [];
    let total = 0;

    // PEGO AS QUANTIDADES DE ITEM QUE É MAIOR QUE 0 E ADICIONO NO CHECKOUTBILL. 

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
            const menuItem = menu.find(menu => menu.id === item.id);
            if (menuItem) {
                item.quantity = menuItem.quantity;
            }
        });
    }
    useEffect(() => {
        settingCartQuantityFromLocalStorage()
    }, [checkoutBill])
    

    const AddItemCart = () => {
            billIndex.forEach(index => {
                if (index !== undefined) {
                    const itemToAdd = menu[index];
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
        const filteredMenu = menu.filter((item) => item.quantity > 0);
        console.log(filteredMenu);
        console.log(checkoutBill);
        /* checkoutBill = filteredMenu */
        filteredMenu.length !== 0 ? checkoutBill = filteredMenu : null

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
    useEffect(() => {
        settingQuantity()
    }, [])


    // INTEGRATION WITH LOCAL  STORAGE
    const saveCartInLocalStorage = () => {  
        return localStorage.setItem("cart", JSON.stringify(checkoutBill))
    }
    console.log(checkoutBill)
    saveCartInLocalStorage(checkoutBill)


    const createProductCheckout = () => {
        console.log(checkoutBill)
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
        <div className="w-full h-full min-h-screen flex flex-col items-center py-10 lg:px-20">
            <div className="w-full flex flex-col items-center justify-center gap-12">
                <img className='h-28' src={logoImg} alt="Logo Padaria do Baiano" />
                <h1 className="text-3xl">Checkout</h1>
            </div>

            <table className="w-[90%] lg:w-[60%] text-white my-10 ">
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
            </table>

            <div className='w-full h-full bg-white flex justify-center items-center lg:mt-16'>
                <div className="flex flex-col lg:flex-row items-start gap-8 text-white">
                    <PayButton cartItems={checkoutBill}/>
                    <Link className="w-80 h-fit px-6 py-3 rounded-xl bg-green-600 text-2xl flex justify-center items-center gap-5">
                        Pagar com Dinheiro <GiMoneyStack className="text-3xl"/>
                    </Link>
                </div>
            </div>
        </div>
    )
    }

export default CartCheckout
