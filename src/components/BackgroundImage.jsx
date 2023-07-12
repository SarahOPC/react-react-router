import styled from 'styled-components';

const BackgroundImageDiv = styled.div`
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

const SloganText = styled.h1`
  color: #FFFFFF;
  position: absolute;
  top: 32%;
  left: 35%;
`;

const ImageDivBkgd = styled.div`
  margin: 4%;
  position: relative;
`;

function BackgroundImage({ backgroundImage, alt, slogan }) {
  return (
    <div>
      <ImageDivBkgd>
        <BackgroundImageDiv $backgroundimage={backgroundImage} alt={alt} />
        <SloganText>{slogan}</SloganText>
      </ImageDivBkgd>
    </div>
  );
}

export default BackgroundImage;