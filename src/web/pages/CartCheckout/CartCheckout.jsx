/* import { FaCreditCard } from "react-icons/fa6"; */
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';
import './styles.css'
import PayButton from "../../components/PayCardButton/PayCardButton";
import Header from "../../components/Header/Header";
import { useEffect } from "react";


function CartCheckout() {

    const { numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex, setNumberOfMistoQuente, setNumberOfXTudo, setNumberOfSandMortadela, setNumberOfXSalada, setNumberOfBauru, setNumberOfSandPernil, setNumberOfAmericano, setNumberOfFrangoQueijo, setNumberOfXBacon, setNumberOfXCatupiry, setNumberOfSandAtum, setNumberOfSandSalame, setNumberOfMarmitex } = useGlobal();

    const cart = [numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex];

    const products = [ 
        { id: 1, productName: 'Misto Quente', price: 5.99, quantity: numberOfMistoQuente, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/misto-quente_pjamnc.jpg"} , 
        { id: 2, productName: 'X-Tudo', price: 23.99, quantity: numberOfXTudo, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/x-tudo_ys6tjp.png"},  
        { id: 3, productName: 'Sanduíche de Mortadela', price: 17.99, quantity: numberOfSandMortadela, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/sanduiche-de-mortadela_mt5sy4.webp"}, 
        { id: 4, productName: 'X-Salada', price: 17.99, quantity: numberOfXSalada, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/x-salada_qp8fkb.jpg"},  
        { id: 5, productName: 'Bauru', price: 22.50, quantity: numberOfBauru, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982956/Del%C3%ADcias-da-casa/bauru_nm2ce7.jpg"}, 
        { id: 6, productName: 'Sanduíche de Pernil', price: 21.99, quantity: numberOfSandPernil, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982956/Del%C3%ADcias-da-casa/sanduiche-de-pernil_a8acll.png"}, 
        { id: 7, productName: 'Americano', price: 20.99, quantity: numberOfAmericano, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/americano_bt0p52.jpg"}, 
        { id: 8, productName: 'Frango c/ Qeijo', price: 18.99, quantity: numberOfFrangoQueijo, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982956/Del%C3%ADcias-da-casa/sanduiche-frango_lo9p9k.jpg"}, 
        { id: 9, productName: 'X Bacon', price: 19.99, quantity: numberOfXBacon, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982956/Del%C3%ADcias-da-casa/x-bacon_bpkbbw.jpg"}, 
        { id: 10, productName: 'X Catupiry', price: 20.99, quantity: numberOfXCatupiry, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982954/Del%C3%ADcias-da-casa/x-catupiry_uytuqc.jpg"}, 
        { id: 11, productName: 'Sanduíche de Atum', price: 24.99, quantity: numberOfSandAtum, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/sanduiche-atum_gn0a7g.jpg"}, 
        { id: 12, productName: 'Sanduíche de Salame', price: 20.00, quantity: numberOfSandSalame, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982956/Del%C3%ADcias-da-casa/sanduiche-salame_lffey6.webp"}, 
        { id: 13, productName: 'Marmitex', price: 15.00, quantity: numberOfMarmitex, image: "https://res.cloudinary.com/ds7cszkkx/image/upload/v1709982955/Del%C3%ADcias-da-casa/marmitex_trwhcv.webp"} 
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
            console.log(item)
            const productsItem = products.find(product => product.id === item.id);
            if(productsItem && productsItem.quantity > 0) {
                item.quantity = productsItem.quantity;
            }
        });
    }
    useEffect(() => {
        settingCartQuantityFromLocalStorage()
    }, [checkoutBill])
    

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
        console.log(filteredproducts);
        console.log(checkoutBill);
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
    useEffect(() => {
        settingQuantity()
    }, [])

    console.log(products)
    console.log(checkoutBill)
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
        <>
            <Header className={'w-full h-24'} isOrderButtonActive={false}></Header>
            <div className="w-full h-full min-h-screen flex flex-col items-center pt-10 lg:pt-20 pb-16 lg:px-20">
                <h1 className="text-3xl">Checkout</h1>
            
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

                <div className='w-full h-full bg-white flex justify-center items-center lg:mt-5'>
                    <div className="flex flex-col lg:flex-row items-start gap-8 text-white">
                        <PayButton cartItems={checkoutBill}/>
                        <Link className="w-80 h-fit px-6 py-3 rounded-xl bg-green-600 text-2xl flex justify-center items-center gap-5">
                            Pagar com Dinheiro <GiMoneyStack className="text-3xl"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCheckout
