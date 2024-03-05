import HambImg from '../../assets/images/hamburger-banner.jpeg';
import HamImgMobile from '../../assets/images/hamburger-banner.webp';

export default function Banner() {
  return (
    <div className='w-full h-full flex flex-col gap-24 relative'>
        <div className="w-full h-[600px] md:h-[650px]" style={{ backgroundImage: `${window.innerWidth < 720 ? `url(${HamImgMobile})` : `url(${HambImg})` }`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    </div>
  )
}
