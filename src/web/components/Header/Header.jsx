import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo-delicias-da-casa.png';
import PropTypes from 'prop-types';


export default function Header({ className, isOrderButtonActive }) {
  return (
    <div className={className}>
        <header className="w-full h-24 bg-black flex justify-between items-center py-5 px-5 md:px-20 text-white">
            <img className='h-20 md:h-24' src={logoImg} alt="Logo Padaria do Baiano" />
            <nav className="w-[40%] justify-between text-[1.2rem]  hidden lg:flex">
                <Link>
                    <button>Home</button>
                </Link>
                <Link>
                    <button>Sobre Nós</button>
                </Link>
                <Link>
                    <button>Cardápio</button>
                </Link>
                <Link>
                    <button>Contato</button>
                </Link>
            </nav>
            <Link to='cart-checkout' className={`${isOrderButtonActive ? 'visible' : 'hidden'}`}>
                <button className='bg-green-600 px-4 py-2 md:px-5 md:py-3 rounded-2xl font-bold text-base active:scale-[.98] tracking-wider'>Fazer Pedido</button>
            </Link>
        </header>
    </div>
  )
}

Header.propTypes = {
    className: PropTypes.string,
    isOrderButtonActive: PropTypes.bool,
}