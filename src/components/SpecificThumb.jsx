import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import Dropdown from './Dropdown';
import InactiveStar from '../assets/star-inactive.png';
import ActiveStar from '../assets/star-active.png';

const Element = styled.p`
    color: black;
`;

const InfosContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 4%;
`;

const OwnerAndRatingDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleAndLocationAndTags = styled.div`
`;

const ElementTitle = styled.div`
    color: #FF6060;
    font-size: 2.25em;
`;

const ElementLocation = styled.div`
    color: #FF6060;
    margin: 2% 0% 0% 0%;
    font-size: 1.25em;
`;

const ElementTagDiv = styled.div`
    display: flex;
    margin: 3em 0em;
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
`;

const DropDownsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4% 4% 15% 4%;
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
`;

const RatingToOne = styled.div`
    display: flex;
    margin: 30% 0%;
`;

const RatingToTwo = styled.div`
    display: flex;
    margin: 30% 0%;
`;

const RatingToThree = styled.div`
    display: flex;
    margin: 30% 0%;
`;

const RatingToFour = styled.div`
    display: flex;
    margin: 30% 0%;
`;

const RatingToFive = styled.div`
    display: flex;
    margin: 30% 0%;
`;

const DividingDiv = styled.div`
    width: 50%;
    margin-right: 1em;
`;

function SpecificThumb() {
    const [data, setData] = useState([]);
    const urlId = useParams();
    
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
        
        return (
            <div>
                <BackgroundImage isSpecificPage={true} backgroundImage={ specificElement.cover } />
                {/* {specificElement.pictures.map((picture, index) => (
                    <Element key={index}>{ picture }</Element>
                    ))} {/* Using map to iterate on specificElement.pictures array */}
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
