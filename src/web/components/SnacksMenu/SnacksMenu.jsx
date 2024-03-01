import mistoQuenteImg from '../../assets/images/misto-quente.jpeg';
import xTudoImg from '../../assets/images/x-tudo.png';
import sanduicheMortadelaImg from '../../assets/images/sanduiche-de-mortadela.webp';
import xSaladaImg from '../../assets/images/x-salada.jpg';
import BauruImg from '../../assets/images/bauru.jpg';
import sanduichePernilImg from '../../assets/images/sanduiche-de-pernil.png';
import americanoImg from '../../assets/images/americano.jpg';
import sanduicheFrangoImg from '../../assets/images/sanduiche-frango.jpeg';
import xBaconImg from '../../assets/images/x-bacon.jpg';
import xCatupiryImg from '../../assets/images/x-catupiry.jpg';
import sanduicheAtumImg from '../../assets/images/sanduiche-atum.jpg';
import sanduicheSalameImg from '../../assets/images/sanduiche-salame.webp';
import { MdAddCircle } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import { useGlobal } from '../GlobalProvider/GlobalProvider';
import { MdOutlineWatchLater, MdDeliveryDining  } from "react-icons/md";


export default function Menu() {

    const { numberOfMistoQuente, setNumberOfMistoQuente, numberOfXTudo, setNumberOfXTudo, numberOfSandMortadela, setNumberOfSandMortadela, numberOfXSalada, setNumberOfXSalada, numberOfBauru, setNumberOfBauru, numberOfSandPernil, setNumberOfSandPernil, numberOfAmericano, setNumberOfAmericano, numberOfFrangoQueijo, setNumberOfFrangoQueijo, numberOfXBacon, setNumberOfXBacon, numberOfXCatupiry, setNumberOfXCatupiry, numberOfSandAtum, setNumberOfSandAtum, numberOfSandSalame, setNumberOfSandSalame } = useGlobal();

  return (
    <div className="w-full h-full pt-5 lg:px-28 bg-white border-t-[1px] border-slate-200">

        <div className="w-full h-40 mt-3 mb-16 px-10 pb-10 text-center border-b-[1px] border-black">
            <div className="w-full h-full text-4xl flex items-center justify-evenly gap-5">
                <div className="w-fit h-full flex flex-col justify-center items-center gap-3">
                    <MdOutlineWatchLater />
                    <p className="text-xs lg:text-lg">Aberto das 06:00 hs - 21:00 hs</p>
                </div>
                <div className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center gap-3 mt-3 lg:mt-6">
                    <MdDeliveryDining />
                    <p className="text-xs lg:text-lg">Delivery acima de R$ 10,00 e a partir das 11:00 hs. Taxa de entrega: R$3,00.</p>
                </div>
            </div>
        </div>

        <h2 className="text-[2.5rem] text-center uppercase">Cardápio</h2>
        <h3 className="text-[2rem] text-left mt-16 mb-10 ml-12">Lanches</h3>

        <div className="w-full h-full flex flex-wrap justify-center gap-2">

            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={mistoQuenteImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Misto Quente - R$ 5,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Presunto e Queijo</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfMistoQuente}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio" 
                        onClick={() => {setNumberOfMistoQuente(numberOfMistoQuente + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfMistoQuente(numberOfMistoQuente === 0 ? 0 : (numberOfMistoQuente - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={xTudoImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">X-Tudo- R$ 12,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Hambúrguer, Ovo, Queijo, Bacon, Alface e Tomate</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfXTudo}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfXTudo(numberOfXTudo + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfXTudo(numberOfXTudo === 0 ? 0 : (numberOfXTudo - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={sanduicheMortadelaImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Sanduíche de Mortadela - R$ 8,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Mortadela, Alface e Manteiga</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfSandMortadela}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col ">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfSandMortadela(numberOfSandMortadela + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfSandMortadela(numberOfSandMortadela === 0 ? 0 : (numberOfSandMortadela - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={xSaladaImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">X-Salada - R$ 8,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Hambúrguer, Queijo, Alface, Tomate</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfXSalada}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfXSalada(numberOfXSalada + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfXSalada(numberOfXSalada === 0 ? 0 : (numberOfXSalada - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={BauruImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Bauru - R$ 10,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Rosbife, Queijo, Tomate, Picles</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfBauru}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfBauru(numberOfBauru + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfBauru(numberOfBauru === 0 ? 0 : (numberOfBauru - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={sanduichePernilImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Sanduíche de Pernil - R$ 10,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Pernil, Tomate</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfSandPernil}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfSandPernil(numberOfSandPernil + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfSandPernil(numberOfSandPernil === 0 ? 0 : (numberOfSandPernil - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={americanoImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Americano - R$ 15,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center"> Pão, Presunto, Mussarela, Ovo, Alface, Tomate e Maionese</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfAmericano}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfAmericano(numberOfAmericano + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfAmericano(numberOfAmericano === 0 ? 0 : (numberOfAmericano - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={sanduicheFrangoImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Frango c/ Qeijo - R$ 6,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Presunto e Queijo</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfFrangoQueijo}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfFrangoQueijo(numberOfFrangoQueijo + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfFrangoQueijo(numberOfFrangoQueijo === 0 ? 0 : (numberOfFrangoQueijo - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={xBaconImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">X Bacon- R$ 16,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Hambúrguer, Mussarela, Bacon e Maionese Caseira</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfXBacon}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfXBacon(numberOfXBacon + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfXBacon(numberOfXBacon === 0 ? 0 : (numberOfXBacon - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={xCatupiryImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">X Catupiry - R$ 17,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Hambúrguer, Requeijão, Alface, Tomate e Maionese</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfXCatupiry}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfXCatupiry(numberOfXCatupiry + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfXCatupiry(numberOfXCatupiry === 0 ? 0 : (numberOfXCatupiry - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={sanduicheAtumImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Sanduíche de Atum - R$ 15,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Atum Ralado, Ervilha, Maionese e Alface</p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfSandAtum}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfSandAtum(numberOfSandAtum + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfSandAtum(numberOfSandAtum === 0 ? 0 : (numberOfSandAtum - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="container-dish">
                <img className='w-[220px] h-[170px] rounded-3xl select-none' src={sanduicheSalameImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Sanduíche de Salame - R$ 18,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Pão, Salame, Mussarela, Alface e Maionese </p>
                </div>
                <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="menu-quantity">{numberOfSandSalame}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio"
                        onClick={() => {setNumberOfSandSalame(numberOfSandSalame + 1)}}>
                            <MdAddCircle className='text-[1.7rem]'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfSandSalame(numberOfSandSalame === 0 ? 0 : (numberOfSandSalame - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-slate-400'/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
