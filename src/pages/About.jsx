import Header from "../components/Header";
import aboutImage from "../assets/about.svg";
import Footer from "../components/Footer";
import DropDown from "../components/Dropdown";
import styled from 'styled-components';

const AboutDropdownContainer = styled.div`
  margin: 0% 15%;

  @media (max-width: 550px) {
    margin: 5% 5%;
  }
`;

const Image = styled.img`
  border-radius: 2em;
  transform: scale(1.4);

  @media (max-width: 1300px) {
    width: 100%;
    height: 13em;
    border-radius: 1.5em;
    transform: scale(1);
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3.5em;
  margin-bottom: 4.5em;
  
  @media (max-width: 550px) {
    margin-bottom: 0em;
    margin-top: 0em;
  }
`;

function About() {
  
  return (
    <div  style={{overflow: 'hidden'}}>
      <Header />
      <ImageContainer>
        <Image src={aboutImage} alt="Vue de montagnes" />
      </ImageContainer>
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
