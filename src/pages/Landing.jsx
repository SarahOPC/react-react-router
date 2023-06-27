import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import bkgdImg from "../assets/bkgdImg.svg"

function Landing() {
  return (
    <div>
      <Header />
      <BackgroundImage backgroundImage={bkgdImg} alt="Vue de mer et rochers" slogan="Chez vous, partout et ailleurs" />
    </div>
  );
}

export default Landing;
