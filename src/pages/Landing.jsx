import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import bkgdImg from "../assets/bkgdImg.svg";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Landing() {
  
  return (
    <div>
      <Header />
      <BackgroundImage backgroundImage={bkgdImg} alt="Vue de mer et rochers" slogan="Chez vous, partout et ailleurs" />
      <Card />
      <Footer />
    </div>
  );
}

export default Landing;
