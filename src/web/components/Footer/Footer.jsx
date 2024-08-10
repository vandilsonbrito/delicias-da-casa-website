import logoImg from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="w-full h-full bg-primary text-black pb-3 px-10 lg:px-28 flex flex-col items-center justify-center border-t-[1px] border-slate-200" id='/contact'>

        <div className="w-full h-full flex flex-col gap-3 items-center lg:flex-row lg:items-start lg:justify-evenly pt-10 text-lg lg:text-[1.5rem]">
            <div className='w-fit h-full'>
                <img className='h-20' src={logoImg} alt="Logo da Padaria do Baiano" />
            </div>
            <div className="w-fit h-full">
                <p className="text-center md:mb-3 lg:mb-4">Localização</p>
                <p className='text-sm text-center md:text-base'>Rua 123, n&#8304;0, Bahia, Brasil</p>
            </div>
            <div className="w-fit h-full flex flex-col items-center">
                <p className="text-center md:mb-3 lg:mb-3 ">Contato</p>
                <p className='text-sm lg:text-lg'>(77)91777-7777</p>
            </div>
        </div>
        <div className="text-sm mt-12">&copy; Criado por <a className='underline' href="https://vandilson-portfolio.netlify.app/">Vandilson Brito</a></div>
    </footer>
  )
}
