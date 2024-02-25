import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo-padaria-do-baiano.png';

export default function Header() {
  return (
    <header className="w-full h-32 bg-white flex justify-center lg:justify-between items-center py-12 px-20">  
        <img className='h-24' src={logoImg} alt="Logo Padaria do Baiano" />

        <nav className="w-[60%] justify-between text-[1.35rem] hidden lg:flex">
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
    </header>
  )
}
