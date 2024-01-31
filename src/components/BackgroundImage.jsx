import styled from 'styled-components';

const GlobalStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  background-repeat: no-repeat;
  position: relative;
  height: 15em;

  @media (max-width: 900px) {
    height: 7em;
    margin: 0em 1em;
  }
`;

const SpecificStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  height: 223px;
  margin: 4.5em 0em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1em;

  @media (max-width: 900px) {
    margin: 0.5em;
  }
`;

const SloganText = styled.h1`
  color: #FFFFFF;
  z-index: 1;
  position: absolute;
  left: 35%;  

  @media (max-width: 900px) {
    font-weight: 100;
    white-space: pre-wrap;
    left: 5%;
  }
`;

const ImageDivBkgd = styled.div`
  margin: 0em 4.5em;
  position: relative;

  @media (max-width: 900px) {
    margin: 0em;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1em;

  @media (min-width: 550px) {
    height: 100%;
  }
`;

function BackgroundImage({ backgroundImage, alt, slogan, isSpecificPage }) {
  const BackgroundComponent = isSpecificPage ? SpecificStyleProperties : GlobalStyleProperties;

  if(slogan !== undefined) {
    // Add a /br after each ", "
    const formattedSlogan = slogan.replace(/, /g, ',\n');
    
    return (
      <div>
      <ImageDivBkgd>
        <BackgroundComponent $backgroundimage={backgroundImage} alt={alt}>
          <Overlay />
          <SloganText>{formattedSlogan}</SloganText>
        </BackgroundComponent>
      </ImageDivBkgd>
      </div>
    );
  } else {
    return (
      <div>
      <ImageDivBkgd>
        <BackgroundComponent $backgroundimage={backgroundImage} alt={alt} />
      </ImageDivBkgd>
      </div>
    );
  }
}

export default BackgroundImage;