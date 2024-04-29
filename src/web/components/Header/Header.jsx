import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import logoImg from '../../assets/images/logo.png';
import PropTypes from 'prop-types';
import { useGlobal } from '../GlobalProvider/GlobalProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


Header.propTypes = {
    className: PropTypes.string,
    isOrderButtonActive: PropTypes.bool,
    isNavActive: PropTypes.bool
}

export default function Header({ className, isOrderButtonActive, isNavActive }) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const { thereIsOrder } = useGlobal();
    const navigate = useNavigate();
    
    
    const handleOrder = (e) => {
        e.preventDefault()
        if(thereIsOrder) {
            navigate('cart-checkout');
        }
        else {
            toast.info("Nenhum item selecionado!");
        }
    };

  return (
    <div className={className}>
        <header className="w-full md:h-[80px] flex justify-between items-center py-3 md:py-5 px-5 md:px-20 text-black">
            <Link to="/">
                <img className='h-16 md:h-[80px]' src={logoImg} alt="Logo Padaria do Baiano" />
            </Link>
            <nav className={`w-[40%] ${isNavActive ? 'justify-between' : 'justify-end'} text-[1.2rem]  flex '}`}>
                <Link to="/" className={`${isOrderButtonActive ? 'hidden' : 'visible'}`}>   
                    <button>Home</button>
                </Link>
                <Link to='about' onClick={() =>  scrollToTop()} className={`${(isNavActive && window.innerWidth > 1024) ? 'visible' : 'hidden'}`}>
                    <button>Sobre Nós</button>
                </Link>
                <ScrollLink to='/menu' href='/menu' smooth={true} duration={500} offset={130} className={`${(isNavActive && window.innerWidth > 1024) ? 'visible' : 'hidden'}`}>
                    <button>Cardápio</button>
                </ScrollLink>
                <ScrollLink to='/contact' href='/footer' smooth={true} duration={500} className={`${(isNavActive && window.innerWidth > 1024) ? 'visible' : 'hidden'}`}>
                    <button>Contato</button>
                </ScrollLink>
            </nav>
            <Link to='cart-checkout' onClick={(e) => handleOrder(e)} className={`${isOrderButtonActive ? 'visible' : 'hidden'}`}>
                <button className='bg-green-600 px-4 py-3 md:px-5 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base active:scale-[.98] tracking-wider'>Fazer Pedido</button>
                <ToastContainer />
            </Link>
        </header>
    </div>
  )
}

