import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import Dropdown from './Dropdown';

const Element = styled.p`
    color: black;
`;

const ElementTitle = styled.div`
    color: #FF6060;
    font-size: 2.25em;
    margin-left: 4%;    
`;

const ElementLocation = styled.div`
    color: #FF6060;
    margin: 1% 4%;
    font-size: 1.25em;
`;

const ElementTagDiv = styled.div`
    display: flex;
    margin: 2% 0% 2% 4%;
`;

const ElementTag = styled.p`
    color: #FFFFFF;
    background-color: #FF6060;
    padding: 0.5% 2%;
    border-radius: 0.7em;
    font-size: 1em;
    margin: 0% 1% 0% 0%;
`;

const DropDownsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4% 4% 15% 4%;
`;

const StyledDropdown = styled(Dropdown)`
    flex: 1;
    width: 100%;
`;

const ElementHostName = styled.div`
    color: #FF6060;
`;

const ElementHostPicture = styled.div`
    color: #FF6060;
    
`;

const ElementRating = styled.div`
    color: #FF6060;
    
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
        
        return (
            <div>
                <BackgroundImage isSpecificPage={true} backgroundImage={ specificElement.cover } />
                {/* {specificElement.pictures.map((picture, index) => (
                    <Element key={index}>{ picture }</Element>
                    ))} {/* Using map to iterate on specificElement.pictures array */}
                <ElementTitle>{ specificElement.title }</ElementTitle>
                <ElementLocation>{ formattedLocation }</ElementLocation>
                <ElementTagDiv>
                {specificElement.tags.map((tag, index) => (
                    <ElementTag key={index}>{ tag }</ElementTag>
                ))}
                    <ElementTag> { locationParts[1] }</ElementTag>
                </ElementTagDiv>
                <ElementHostName>{ specificElement.host.name }</ElementHostName>
                <ElementHostPicture>{ specificElement.host.picture }</ElementHostPicture>
                <ElementRating>{ specificElement.rating }</ElementRating>
                <DropDownsContainer>
                    <StyledDropdown rectangleTitle="Description" content={specificElement.description}/>
                    <StyledDropdown rectangleTitle="Équipements" content={specificElement.equipments.map((equipment, index) => (
                        <Element key={index}>{ equipment }</Element>
                    ))} />
                </DropDownsContainer>
            </div>
        );
    }
}

export default SpecificThumb;