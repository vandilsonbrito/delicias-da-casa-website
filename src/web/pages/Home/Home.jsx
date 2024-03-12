import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Snacks from "../../components/SnacksMenu/SnacksMenu";
import Dishes from "../../components/DishesMenu/DishesMenu";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header className={'w-full h-24 fixed z-50'} isOrderButtonActive= {true}/>
      <Banner/>
      <Snacks/>
      <Dishes/>
      <Footer/>
    </>
  )
}
