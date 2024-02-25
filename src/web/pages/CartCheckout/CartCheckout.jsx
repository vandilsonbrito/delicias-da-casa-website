import { FaCreditCard } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import logoImg from '../../assets/images/logo-padaria-do-baiano.png';
import { useGlobal } from '../../components/GlobalProvider/GlobalProvider';
import './styles.css'

function CartCheckout() {

    const { numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex } = useGlobal();

    const bill = [numberOfMistoQuente, numberOfXTudo, numberOfSandMortadela, numberOfXSalada, numberOfBauru, numberOfSandPernil, numberOfAmericano, numberOfFrangoQueijo, numberOfXBacon, numberOfXCatupiry, numberOfSandAtum, numberOfSandSalame, numberOfMarmitex];

    const snakcs = [ {productName: 'Misto Quente', price: 5.99, quantity: numberOfMistoQuente} , {productName: 'X-Tudo', price: 23.99, quantity: numberOfXTudo},  {productName: 'Sanduíche de Mortadela', price: 17.99, quantity: numberOfSandMortadela}, {productName: 'X-Salada', price: 17.99, quantity: numberOfXSalada},  {productName: 'Bauru', price: 22.50, quantity: numberOfBauru}, {productName: 'Sanduíche de Pernil', price: 21.99, quantity: numberOfSandPernil}, {productName: 'Americano', price: 20.99, quantity: numberOfAmericano}, {productName: 'Frango c/ Qeijo', price: 18.99, quantity: numberOfFrangoQueijo}, {productName: 'X Bacon', price: 19.99, quantity: numberOfXBacon}, {productName: 'X Catupiry', price: 20.99, quantity: numberOfXCatupiry}, {productName: 'Sanduíche de Atum', price: 24.99, quantity: numberOfSandAtum}, {productName: 'Sanduíche de Salame', price: 20.00, quantity: numberOfSandSalame}, {productName: 'Marmitex', price: 15.00, quantity: numberOfMarmitex} ]
 
    let billIndex = bill.map((item, index) => { if(item > 0) return index });
    billIndex = billIndex.filter(function( element ) {
        return element !== undefined;
     });

     let showProductCheckout = [];
     let total = 0;
     const createProductCheckout = () => {
        let checkoutBill = [];

        for(let i = 0; i < snakcs.length; i++) {
            console.log(billIndex[i] + ' billIndex')
            if(billIndex[i] !== undefined) {
                console.log(billIndex[i])
                checkoutBill.push(snakcs[billIndex[i]])
                console.log(snakcs[billIndex[i]])
            }
        }

        console.log(checkoutBill)

        checkoutBill.map((item, index) => {
            console.log(item.productName)
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

        console.log(showProductCheckout)
        return showProductCheckout
    }

 

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center py-10 lg:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-12">
            <img className='w-24 h-24' src={logoImg} alt="Logo Padaria do Baiano" />
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
                <Link to='Checkout' className="w-80 h-fit px-6 py-3 rounded-xl bg-blue-800 text-2xl flex gap-5 justify-center items-center">
                    Pagar com Cartão <FaCreditCard className="text-2xl"/>
                </Link>
                <Link className="w-80 h-fit px-6 py-3 rounded-xl bg-green-600 text-2xl flex justify-center items-center gap-5">
                    Pagar com Dinheiro <GiMoneyStack className="text-3xl"/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartCheckout
