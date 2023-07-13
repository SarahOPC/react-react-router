import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import aboutImage from "../assets/about.svg";
import Footer from "../components/Footer";
import SpecificAbout from "../components/SpecificAbout";

function About() {
  
  return (
    <div>
      <Header />
      <BackgroundImage backgroundImage={aboutImage} alt="Vue de montagnes" />
      <SpecificAbout />
      <Footer />
    </div>
  );
}

export default About;
