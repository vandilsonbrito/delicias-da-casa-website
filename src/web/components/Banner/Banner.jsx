import BreadImg from '../../assets/images/tipos-de-pao.png';
import SnacksImg from '../../assets/images/salgados.jpg';

export default function Banner() {
  return (
    <div className='w-full h-full flex flex-col gap-24 relative'>
        <div className="w-full h-28 lg:h-52 absolute top-48 bg-white flex flex-col justify-center">
            <h1 className="text-xl lg:text-5xl px-8 lg:px-40 leading-tight text-center">Do <strong>forno</strong> direto para o <strong>coração</strong>: na nossa padaria, a <strong>paixão</strong> pelo <strong>sabor</strong> é a receita principal!</h1>
        </div>
        <div className="w-full h-52" style={{ backgroundImage: `url(${BreadImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom'}}></div>
        <div className="w-full h-52" style={{ backgroundImage: `url(${SnacksImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    </div>
  )
}
