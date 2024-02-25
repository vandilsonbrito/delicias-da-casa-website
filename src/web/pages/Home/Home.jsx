import Banner from "../../components/Banner/Banner";
import DeliveryBTN from "../../components/DeliveryBTN/DeliveryBTN";
import Header from "../../components/Header/Header";
import Snacks from "../../components/SnacksMenu/SnacksMenu";
import Dishes from "../../components/DishesMenu/DishesMenu";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <DeliveryBTN/>
      <Snacks/>
      <Dishes/>
      <Footer/>
    </>
  )
}
