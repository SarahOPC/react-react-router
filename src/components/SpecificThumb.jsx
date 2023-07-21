import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import Dropdown from './Dropdown';
import InactiveStar from '../assets/star-inactive.png';
import ActiveStar from '../assets/star-active.png';
import ToLeftArrow from '../assets/toLeftArrow.png';
import ToRightArrow from '../assets/toRightArrow.png';

const Element = styled.p`
    color: black;
`;

const InfosContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 4%;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const OwnerAndRatingDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 450px) {
        flex-direction: row-reverse;
        font-size: 0.5em;
    }
`;

const TitleAndLocationAndTags = styled.div`
`;

const ElementTitle = styled.div`
    color: #FF6060;
    font-size: 2.25em;

    @media (max-width: 450px) {
        font-size: 1.5em;
    }
`;

const ElementLocation = styled.div`
    color: #FF6060;
    margin: 2% 0% 0% 0%;
    font-size: 1.25em;

    @media (max-width: 450px) {
        font-size: 0.75em;
    }
`;

const ElementTagDiv = styled.div`
    display: flex;
    margin: 3em 0em;
    
        @media (max-width: 450px) {
            width: 17em;
        }

    p {
        @media (max-width: 450px) {
            font-size: 0.75em;
        }
    }
`;

const ElementTag = styled.p`
    color: #FFFFFF;
    background-color: #FF6060;
    padding: 0.5% 2%;
    border-radius: 0.7em;
    font-size: 1em;
    margin: 0% 1% 0% 0%;
    width: 10em;
    text-align: center;
`;

const HostDiv = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 450px) {
        margin-left: 7em;
        margin-bottom: 4em;
    }
`;

const DropDownsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4% 4% 4% 4%;

    @media (max-width: 450px) {
        flex-direction: column;
        width: 80vh
    }
`;

const StyledDropdown = styled(Dropdown)`
    flex: 1;
    margin-right: 1em;
`;

const ElementHostName = styled.div`
    color: #FF6060;
    font-size: 1.5em;
    width: 2em;
    padding-right: 1em;
`;

const ElementHostPicture = styled.img`
    background-image: url(${(props) => props.$hostpicture});
    background-size: cover;
    background-position: center;
    border-radius: 3em;
    width: 4em;
    height: 4em;
    margin-left: 2.5em;
`;

const RatingToZero = styled.div`
    display: flex;
    margin: 3em 0em;

    @media (max-width: 450px) {
        margin: 1em 0em 5em 0em;
    }
`;

const RatingToOne = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 450px) {
        margin: 1em 0em;
    }
`;

const RatingToTwo = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 450px) {
        margin: 1em 0em;
    }
`;

const RatingToThree = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 450px) {
        margin: 1em 0em;
    }
`;

const RatingToFour = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 450px) {
        margin: 1em 0em;
    }
`;

const RatingToFive = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 450px) {
        margin: 1em 0em;
    }
`;

const DividingDiv = styled.div`
    width: 50%;
    margin-right: 1em;
`;

const ContainerSlideShow = styled.div`
    position: relative;
`;

const Arrows = styled.div`
    position: absolute;
    top: 42%;
    width: 100%;
`;

const LeftArrow = styled.div`
    position: absolute;
    left: 5%;
    cursor: pointer;

    img {
        @media (max-width: 450px) {
            width: 2em;
        }
    }
`;

const RightArrow = styled.div`
    position: absolute;
    right: 5%;
    cursor: pointer;

    img {
        @media (max-width: 450px) {
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

    @media (max-width: 450px) {
        display: none;
    }
`;

function SpecificThumb() {
    const [data, setData] = useState([]);
    const urlId = useParams();
    // For the carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        // fetch data with the proxy url
        fetch("/api/logements.json")
        .then(response => response.json())
        .then(responseData => {
            setData(responseData)
        })
        .catch(error => {
            console.error("Error fetching data : ", error);
        });
    }, []);
    
    if (data.length > 0) {
        const specificElement = data.find(element => element.id === urlId.id);
        
        const locationParts = specificElement.location.split(" - ");
        const cityParts = locationParts[1].split(" ");
        const city = cityParts[0];
        const formattedLocation = city + ", " + locationParts[0];
        
        let RatingComponent;

        switch(specificElement.tag) {
            case 0:
                RatingComponent = RatingToZero;
                break;
                case 1:
                    RatingComponent = RatingToOne;
                    break;
            case 2:
                RatingComponent = RatingToTwo;
                break;
            case 3:
                RatingComponent = RatingToThree;
                break;
            case 4:
                RatingComponent = RatingToFour;
                break;
            case 5:
                RatingComponent = RatingToFive;
                break;
            default:
                RatingComponent = RatingToZero;
                break;
        }

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
            <div>
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
                <InfosContainer>
                    <TitleAndLocationAndTags>
                        <ElementTitle>{ specificElement.title }</ElementTitle>
                        <ElementLocation>{ formattedLocation }</ElementLocation>
                        <ElementTagDiv>
                        {specificElement.tags.map((tag, index) => (
                            <ElementTag key={index}>{ tag }</ElementTag>
                        ))}
                            <ElementTag> { locationParts[1] }</ElementTag>
                        </ElementTagDiv>
                    </TitleAndLocationAndTags>
                    <OwnerAndRatingDiv>
                        <HostDiv>
                            <ElementHostName>{ specificElement.host.name }</ElementHostName>
                            <ElementHostPicture $hostpicture={ specificElement.host.picture }/>
                        </HostDiv>
                        <RatingComponent>
                            {/* Array.from create an array and length: 5 gives it an length of 5 elements */}
                            {/* (_, index) => Arrow function to map into each element in the array where _ value is the current element (none so use of _ to precise we don't use it 
                            and index for the index of the current elementin the array) */}
                            {/* Checking if the current index is less than the rating valueof the specific element. If true = ActiveStar, If false = InactiveStar */}
                            {/* For each star, we will create an <img> - executed five times because of length: 5 */}
                            {Array.from({ length: 5 }, (_, index) => (
                            <img
                                key={index}
                                src={index < specificElement.rating ? ActiveStar : InactiveStar}
                                alt={`Rating of ${index + 1}`}
                            />
                            ))}
                        </RatingComponent>
                    </OwnerAndRatingDiv>
                </InfosContainer>
                <DropDownsContainer>
                    <DividingDiv>
                        <StyledDropdown rectangleTitle="Description" content={specificElement.description}/>
                    </DividingDiv>
                    <DividingDiv>
                        <StyledDropdown rectangleTitle="Équipements" content={specificElement.equipments.map((equipment, index) => (
                            <Element key={index}>{ equipment }</Element>
                        ))} />
                    </DividingDiv>
                </DropDownsContainer>
            </div>
        );
    }
}

export default SpecificThumb;
