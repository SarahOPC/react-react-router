import styled from 'styled-components';

const GlobalStyleProperties = styled.div`
  filter: brightness(0.7);
  background-image: url(${(props) => props.$backgroundimage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  border-radius: 2em;

  @media (max-width: 1150px) {
    min-height: 15vh;
  }
`;

const SpecificStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  min-height: 75vh;

  @media (max-width: 1150px) {
    min-height: 33vh;
  }
`;

const SloganText = styled.h1`
  color: #FFFFFF;
  position: absolute;
  top: 32%;
  left: 35%;

  @media (max-width: 1150px) {
    top: 11%;
    left: 6%;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;

const ImageDivBkgd = styled.div`
  margin: auto;
  position: relative;
`;

function BackgroundImage({ backgroundImage, alt, slogan, isSpecificPage }) {
  const BackgroundComponent = isSpecificPage ? SpecificStyleProperties : GlobalStyleProperties;

  if(slogan !== undefined) {
    // Add a /br after each ", "
    const formattedSlogan = slogan.replace(/, /g, ',\n');
    
    return (
      <div>
      <ImageDivBkgd>
        <BackgroundComponent $backgroundimage={backgroundImage} alt={alt} />
        <SloganText>{formattedSlogan}</SloganText>
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