import marmitexImg from '../../assets/images/marmitex.webp';
import DeliveryBTN from '../DeliveryBTN/DeliveryBTN';
import { MdOutlineWatchLater, MdDeliveryDining  } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import { useGlobal } from '../GlobalProvider/GlobalProvider';


export default function DishesMenu() {

    const { numberOfMarmitex, setNumberOfMarmitex } = useGlobal();

  return (
    <div className="w-full h-full lg:px-28 bg-white border-b-[1px] border-slate-200"> 
        <h3 className="text-[2rem] text-left mt-16 mb-10 ml-12">Pratos</h3>
        
        <div className="w-full h-full flex flex-wrap justify-center gap-2">
            <div className="container-dish ">
                <img className='w-[220px] h-[170px] rounded-3xl' src={marmitexImg} alt="" />
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Marmitex - R$ 15,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Feijão, Arroz, Carne e Salada</p>
                </div>
            </div>
            <div className="absolute">
                    <div className="relative right-[105px]">
                        <div className="w-[40px] h-[40px] p-[1px] bg-green-600 rounded-full text-2xl text-white flex justify-center items-center pt-1">{numberOfMarmitex}</div>
                    </div>
                    <div className="relative -top-[40px] -right-[115px] flex flex-col">
                        <button 
                        className="btn-cardapio" 
                        onClick={() => {setNumberOfMarmitex(numberOfMarmitex + 1)}}>
                            <MdAddCircle className='text-[1.7rem] text-green-500'/>
                        </button>
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfMarmitex(numberOfMarmitex === 0 ? 0 : (numberOfMarmitex - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem] text-green-800'/>
                        </button>
                    </div>
                </div>
        </div>

        <DeliveryBTN/>
        <div className="w-full my-3 px-10 text-center">
            <div className="w-full h-full text-4xl flex items-center justify-evenly gap-5">
                <div className="w-fit h-full flex flex-col justify-center items-center gap-3">
                    <MdOutlineWatchLater />
                    <p className="text-sm lg:text-xl">Aberto das 06:00 hs - 21:00 hs</p>
                </div>
                <div className="w-fit h-full flex flex-col justify-center items-center gap-3">
                    <MdDeliveryDining />
                    <p className="text-sm lg:text-xl">Delivery a partir das 11:00 hs</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
