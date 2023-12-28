import styled from 'styled-components';

const GlobalStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  border-radius: 2em;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 1150px) {
    min-height: 15vh;
    margin: 0em 1em;
  }
`;

const SpecificStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  min-height: 55vh;
  margin: 4.5em 0em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2em;

  @media (max-width: 1780px) {
    margin: 0.5em;
    min-height: 34vh;
    width: auto;
  }
`;

const SloganText = styled.h1`
  color: #FFFFFF;
  z-index: 1;

  @media (max-width: 1150px) {
    font-weight: 100;
    white-space: pre-wrap;
  }
`;

const ImageDivBkgd = styled.div`
  margin: 0em 4.5em;
  position: relative;

  @media (max-width: 1150px) {
    margin: 0em;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2em;
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