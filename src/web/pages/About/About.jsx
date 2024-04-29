import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function About() {
    
  return (
    <>
        <Header isNavActive={false} className={'bg-primary'}/>
        <div className="w-full h-full px-8 py-7 md:px-16 md:py-14 lg:px-28 flex flex-col gap-6 text-lg" style={{minHeight: "calc(100vh - 200px"}}>
            <h3 className="font-semibold text-center mb-5 lg:text-2xl">Bem-vindo ao Delícias da Casa: O Refúgio dos Sabores</h3>
            <p>No coração da cidade, onde os aromas se misturam e as histórias se encontram, está a <strong>Lanchonete e Restaurante Delícias da Casa</strong>. Desde a sua concepção, nossa missão tem sido simples: criar um espaço onde cada mordida seja uma experiência memorável, onde a comida não seja apenas uma refeição, mas uma jornada de deleite para o paladar e para a alma.</p>
            <p>Em cada prato que preparamos, buscamos a essência da culinária caseira, aquela que nos remete às refeições feitas com amor, cuidado e os melhores ingredientes. Desde o café da manhã até o jantar, nossa equipe apaixonada e dedicada trabalha incansavelmente para oferecer uma variedade de opções que encantam os mais diversos gostos e apetites.</p>
            <p>No Delícias da Casa, não se trata apenas de alimentar o corpo, mas também de alimentar a alma. Nossa atmosfera acolhedora convida você a relaxar, desfrutar da companhia de amigos e familiares, e se deixar levar por uma experiência gastronômica autêntica.</p>
            <p>Somos mais do que uma simples lanchonete ou restaurante. Somos um lar longe de casa, um refúgio onde todos são bem-vindos para desfrutar de uma comida deliciosa, um ambiente acolhedor e um serviço caloroso.</p>
            <p><strong>Junte-se a nós no Delícias da Casa e descubra o verdadeiro significado do prazer à mesa</strong>. Estamos ansiosos para recebê-lo e compartilhar nossas delícias culinárias com você. Seja parte da nossa história, onde cada sabor conta uma história única de amor pela comida e pela vida.</p>
        </div>
        <Footer/>
    </>
        
  )
}
