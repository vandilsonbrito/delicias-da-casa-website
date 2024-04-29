import imgHero from '../../assets/images/art-banner.png';

export default function Banner() {
  return (
    <div className='w-full h-full xl:min-h-screen flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24 pt-32 md:pt-40 xl:pt-20 px-7 md:px-20 xl:px-28'>
        <h1 className='text-center lg:text-left text-3xl md:text-5xl xl:text-6xl font-bold'>O melhor sabor do mundo em um só lugar.<p className='text-2xl md:text-3xl xl:text-5xl text-green-600 font-medium mt-5 xl:mt-7' >Muuuuuito mais sabor!</p></h1>
        <img className='w-[250px] h-[240px] md:w-[400px] md:h-[390px]' src={imgHero} alt="" />
  
    </div>
  )
}
