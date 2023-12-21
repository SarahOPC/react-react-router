import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import ToLeftArrow from '../assets/toLeftArrow.png';
import ToRightArrow from '../assets/toRightArrow.png';
import { useState } from 'react';

const GalleryContainer = styled.div`
`;

const LeftArrow = styled.div`
    position: absolute;
    left: 5%;
    cursor: pointer;

    img {
        @media (max-width: 550px) {
            width: 2em;
        }
    }
`;

const ContainerSlideShow = styled.div`
    position: relative;
`;

const Arrows = styled.div`
    position: absolute;
    top: 42%;
    width: 100%;
`;

const RightArrow = styled.div`
    position: absolute;
    right: 5%;
    cursor: pointer;

    img {
        @media (max-width: 550px) {
            width: 2em;
        }
    }
`;

const CounterDiv = styled.div`
    position: absolute;
    bottom: 4%;
    left: 48%;
    font-size: 2em;
    color: #FFFFFF;

    @media (max-width: 550px) {
        display: none;
    }
`;

function GalleryComponent({specificElement}) {

    // For the carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        // prevIndex is the index of the picture before the update so the currentIndex before update
        // % = modulo operation = % calculate the remainder of the division between the value on the left side and the value on the right side 
        // ie here value of prevIndex by the length of the array so result = new index value. Loops back to 0 when length 
        // example of % use : 15 % 4 = 3 because 15 / 4 = 3 --- 3 * 4 = 12 --- 15 - 12 = 3
        // what stays after dividing 10 by 3 is 1
        setCurrentIndex((prevIndex) => (prevIndex + 1) % specificElement.pictures.length);
    };
    
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? specificElement.pictures.length - 1 : prevIndex - 1);
    };

    return (
        <GalleryContainer>
            <ContainerSlideShow>
                        <BackgroundImage isSpecificPage={true} backgroundImage={ specificElement.pictures[currentIndex] } alt="Pictures of the property"/>
                        {specificElement.pictures.length > 1 && (
                        <Arrows>
                            <LeftArrow>
                                <img src={ToLeftArrow} alt="To left arrow" onClick={handlePreviousImage} />
                            </LeftArrow>
                            <RightArrow>
                                <img src={ToRightArrow} alt="To right arrow" onClick={handleNextImage} />
                            </RightArrow>
                        </Arrows>
                        )}
                        {specificElement.pictures.length > 1 && (
                        <CounterDiv>
                            <div>{ currentIndex + 1 } / { specificElement.pictures.length }</div>
                        </CounterDiv>
                        )}
                    </ContainerSlideShow>
        </GalleryContainer>
    )
}

export { GalleryComponent };
