import marmitexImg from '../../assets/images/marmitex.webp';
import { RiCloseCircleFill } from "react-icons/ri";
import { useGlobal } from '../GlobalProvider/GlobalProvider';


export default function DishesMenu() {

    const { numberOfMarmitex, setNumberOfMarmitex } = useGlobal();

  return (
    <div className="w-full h-full pb-20 lg:px-28 bg-white border-b-[1px] border-slate-200"> 
        <h3 className="text-[2rem] text-left mt-16 mb-7 ml-12">Pratos</h3>
        
        <div className="w-full h-full flex flex-wrap justify-center gap-2">
            <div className="container-dish ">
                <button onClick={() => setNumberOfMarmitex(numberOfMarmitex + 1)}>
                    <img className='w-[220px] h-[170px] rounded-3xl' src={marmitexImg} alt="" />
                </button>
                <p className="font-bold text-xl text-center mt-2 tracking-wider">Marmitex - R$ 15,00</p>
                <div className="w-[90%] mt-2 flex items-center justify-center">
                    <p className="text-sm text-center">Feijão, Arroz, Carne e Salada</p>
                </div>
            </div>
            <div className="absolute">
                    <div className="relative top-[36px] right-[105px]">
                        <div className="menu-quantity">{numberOfMarmitex}</div>
                    </div>
                    <div className="relative top-[5px] -right-[110px] flex flex-col">
                        <button 
                        className="btn-cardapio mt-1"
                        onClick={() => setNumberOfMarmitex(numberOfMarmitex === 0 ? 0 : (numberOfMarmitex - 1))}>
                            <RiCloseCircleFill  className='text-[1.7rem]'/>
                        </button>
                    </div>
                </div>
        </div>

    </div>
  )
}
