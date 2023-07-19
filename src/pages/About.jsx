import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/about.svg";
import Footer from "../components/Footer";
import DropDown from "../components/Dropdown";
import styled from 'styled-components';

const AboutDropdownContainer = styled.div`
  margin: 0% 15%;
`

function About() {
  
  return (
    <div>
      <Header />
      <BackgroundImage backgroundImage={aboutImage} alt="Vue de montagnes" />
      <AboutDropdownContainer>
        <DropDown rectangleTitle="Fiabilité" content="" />
        <DropDown 
          rectangleTitle="Respect" 
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DropDown rectangleTitle="Service" content=""/>
        <DropDown rectangleTitle="Sécurtité" content=""/>
      </AboutDropdownContainer>
      <Footer />
    </div>
  );
}

export default About;
