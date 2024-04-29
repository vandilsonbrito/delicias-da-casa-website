import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header className={'w-full h-[85px] fixed z-50 bg-white'} isOrderButtonActive={true} isNavActive={true}/>
      <Banner/>
      <Menu/>
      <Footer/>
    </>
  )
}
