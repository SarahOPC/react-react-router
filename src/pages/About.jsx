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
        <DropDown rectangleTitle="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <DropDown 
          rectangleTitle="Respect" 
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DropDown rectangleTitle="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
        N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <DropDown rectangleTitle="Sécurtité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
        chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
         Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </AboutDropdownContainer>
      <Footer />
    </div>
  );
}

export default About;
