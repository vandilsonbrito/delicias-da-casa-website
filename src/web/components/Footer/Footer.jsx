import logoImg from '../../assets/images/logo-delicias-da-casa.png';

export default function Footer() {
  return (
    <div className="w-full h-full bg-black text-white pt-10 pb-5 px-10 lg:px-28 flex flex-col items-center justify-center border-t-[1px] border-slate-200" >
        <img className='h-24' src={logoImg} alt="Logo da Padaria do Baiano" />

        <div className="w-full h-full flex flex-col lg:flex-row justify-start items-center lg:items-start lg:justify-evenly  text-lg lg:text-[1.5rem]">
            <div className="w-fit h-full">
                <h4 className="text-center mt-16 mb-3 lg:mb-10">Localização</h4>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.614979605628!2d-46.67173001915217!3d-23.560183080605785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582ab519c12f%3A0x4b06957aa3507dd0!2sDengosa%20P%C3%A3es%20e%20Doces!5e0!3m2!1spt-BR!2sbr!4v1705344887379!5m2!1spt-BR!2sbr" 
                  width="220"
                  height="150" 
                  style={{ border: '0'}} 
                  loading="async" >
                  </iframe>

            </div>
            <div className="w-fit h-full flex flex-col items-center">
                <h4 className="text-center mt-16 mb-3 lg:mb-10 ">Contato</h4>
                <p className='text-sm lg:text-lg'>(11)911111111</p>
            </div>
        </div>
        <div className="mt-14">Criado por <a className='text-blue-400 underline' href="https://vandilson-portfolio.netlify.app/">Vandilson Brito</a></div>
    </div>
  )
}
