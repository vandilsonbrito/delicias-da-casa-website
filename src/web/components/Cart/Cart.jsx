import { useGlobal } from '../GlobalProvider/GlobalProvider';
import { FaTrashAlt } from "react-icons/fa";
import Product1Thumbnail from '../../images/image-product-1-thumbnail.jpg';


export default function Cart() {

  const { numberOfProduct, setNumberOfProduct, isAdded, setIsAdded, isCartOpen } = useGlobal();

  return (
    <div className={`w-full ${isCartOpen ? 'flex' : 'hidden'} justify-center sm:justify-end sm:pr-5 xl:pr-10`}>
        <div className="w-[360px] h-[290px] bg-white rounded-xl p-3 shadow-2xl m-auto font-Kumbh absolute top-20 lg:top-24">
            <div className="w-full h-[25%] flex items-center ">
                <p className="font-bold px-3">Cart</p>
            </div>
            <div className="border-b-[2px] border-Light-grayish-blue -mx-3"></div>
            { isAdded && numberOfProduct > 0 ?
                <>
                    <div className="w-full flex items-center justify-between py-6 px-2">
                        <img src={Product1Thumbnail} alt="tênis sneaker" className='w-16 rounded-md'/>
                        <div className="">
                            <p className='text-Dark-grayish-blue '>Fall Limited Edition Sneakers</p>
                            <p className='text-Dark-grayish-blue text-lg mt-1'>{`$125.00 x ${numberOfProduct}`} <span className='font-bold text-Very-dark-blue'>{`$${125.00 * numberOfProduct}`}</span></p>
                        </div>
                        <button onClick={() => {
                            setNumberOfProduct(0);
                            setIsAdded(false);
                        }}>
                            <FaTrashAlt/>
                        </button>
                    </div>
                    <div className="w-full px-2 mt-2">
                        <button className="w-full h-[55px] bg-Orange font-Kumbh font-semibold text-white rounded-xl hover:shadow-lg hover:shadow-Pale-orange active:scale-[.98]">Checkout</button>
                    </div>
                </>
                :
                <div className='w-full h-[75%] flex flex-col justify-center items-center'>
                    <p className='font-bold text-Dark-grayish-blue'>Your cart is empty</p>
                </div>
        }
        </div>
    </div>
  )
}
