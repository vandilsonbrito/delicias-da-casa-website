import Header from "../../components/Header/Header";
import erorImage from "../../assets/images/error-404.png";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <>
        <Header/>
        <div className="w-full h-full flex flex-col items-center justify-center" style={{minHeight: 'calc(100vh - 96px)'}}>
                <img src={erorImage} alt="Error 404" className="w-72"/>
                <a className="text-[.6rem] -mt-5 mb-6" href="https://storyset.com/online">Online illustrations by Storyset</a>
                <p className='text-2xl xl:text-4xl'>Página não encontrada.</p>
        </div> 
        <Footer/>
    </>
  )
}
