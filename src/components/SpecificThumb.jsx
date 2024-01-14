import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import InactiveStar from '../assets/star-inactive.png';
import ActiveStar from '../assets/star-active.png';
import { GalleryComponent } from './Gallery';

const Element = styled.p`
    color: black;
    margin: 2% 0%;
`;

const InfosContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 1% 4%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const OwnerAndRatingDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 550px) {
        flex-direction: row-reverse;
        font-size: 0.5em;
    }
`;

const TitleAndLocationAndTags = styled.div`
`;

const ElementTitle = styled.div`
    color: #FF6060;
    font-size: 2.25em;

    @media (max-width: 550px) {
        font-size: 1.5em;
    }
`;

const ElementLocation = styled.div`
    color: #FF6060;
    margin: 2% 0% 0% 0%;
    font-size: 1.25em;

    @media (max-width: 550px) {
        font-size: 0.75em;
    }
`;

const ElementTagDiv = styled.div`
    display: flex;
    margin: 1em 0em;
    
        @media (max-width: 550px) {
            width: 17em;
            margin: 0.5em 0em;
        }

    p {
        @media (max-width: 550px) {
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

    @media (max-width: 550px) {
        margin-left: 11em;
        margin-bottom: 4em;
    }
`;

const DropDownsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1% 4% 3% 4%;

    @media (max-width: 550px) {
        flex-direction: column;
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
    margin: 1em 0em;

    @media (max-width: 550px) {
        margin: 1em 9em 5em 0em;
    }

    img {
        @media (max-width: 550px) {
            width: 3em;
            height: 3em;
        }
    }
`;

const RatingToOne = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 550px) {
        margin: 1em 0em;
    }
`;

const RatingToTwo = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 550px) {
        margin: 1em 0em;
    }
`;

const RatingToThree = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 550px) {
        margin: 1em 0em;
    }
`;

const RatingToFour = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 550px) {
        margin: 1em 0em;
    }
`;

const RatingToFive = styled.div`
    display: flex;
    margin: 30% 0%;

    @media (max-width: 550px) {
        margin: 1em 0em;
    }
`;

const DividingDiv = styled.div`
    width: 47.5%;
    margin-right: 1em;

    @media (max-width: 550px) {
        width: 100%;
    }
`;

function SpecificThumb() {
    const [data, setData] = useState([]);
    const urlId = useParams();
    const [isValidUrlId, setIsValidUrlId] = useState(true);
    const [specificElement, setSpecificElement] = useState(null);
    const [location, setLocation] =useState(null);
    const [partOfLocation, setPartOfLocation] =useState(null);
    
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
    
    useEffect(() => {
        if (data.length > 0) {
            const foundElement = data.find(element => element.id === urlId.id);
            
            if(foundElement){
                const locationParts = foundElement.location.split(" - ");
                const cityParts = locationParts[1].split(" ");
                const city = cityParts[0];
                const formattedLocation = city + ", " + locationParts[0];
                setSpecificElement(foundElement);
                setLocation(formattedLocation);
                setPartOfLocation(locationParts);
                setIsValidUrlId(true);
            } else {
                setIsValidUrlId(false);
            }
        }
    }, [data, urlId.id]);

    if(!isValidUrlId) {
        return <Navigate to="/error" />;
    }

    if(!specificElement) {
        return null;
    }
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

            return (
                <div>
                    <GalleryComponent specificElement={specificElement} />
                    <InfosContainer>
                        <TitleAndLocationAndTags>
                            <ElementTitle>{ specificElement.title }</ElementTitle>
                            <ElementLocation>{ location }</ElementLocation>
                            <ElementTagDiv>
                            {specificElement.tags.map((tag, index) => (
                                <ElementTag key={index}>{ tag }</ElementTag>
                            ))}
                                <ElementTag> { partOfLocation[1] }</ElementTag>
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
                            <StyledDropdown rectangleTitle="Description" content={specificElement.description} />
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

export default SpecificThumb;
