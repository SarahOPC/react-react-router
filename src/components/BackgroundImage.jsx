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
`;

const SpecificStyleProperties = styled.div`
  background-image: url(${(props) => props.$backgroundimage});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  border-radius: 2em;
`

const SloganText = styled.h1`
  color: #FFFFFF;
  position: absolute;
  top: 32%;
  left: 35%;
`;

const ImageDivBkgd = styled.div`
  margin: 4% 4% 1% 4%;
  position: relative;
`;

function BackgroundImage({ backgroundImage, alt, slogan, isSpecificPage }) {
  const BackgroundComponent = isSpecificPage ? SpecificStyleProperties : GlobalStyleProperties;
  return (
    <div>
      <ImageDivBkgd>
        <BackgroundComponent $backgroundimage={backgroundImage} alt={alt} />
        <SloganText>{slogan}</SloganText>
      </ImageDivBkgd>
    </div>
  );
}

export default BackgroundImage;