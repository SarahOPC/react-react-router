import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/about.svg";
import Footer from "../components/Footer";
import DropDown from "../components/Dropdown";

function About() {
  
  return (
    <div>
      <Header />
      <BackgroundImage backgroundImage={aboutImage} alt="Vue de montagnes" />
      <DropDown rectangleTitle="Fiabilité" content="" />
      <DropDown 
        rectangleTitle="Respect" 
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <DropDown rectangleTitle="Service" content=""/>
      <DropDown rectangleTitle="Sécurtité" content=""/>
      <Footer />
    </div>
  );
}

export default About;
