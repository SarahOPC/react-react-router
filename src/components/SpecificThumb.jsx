import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';

const Element = styled.p`
    color : black;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
    filter: brightness(0.7);
    min-height: 30vh;    
    min-height : 75vh;
    filter : none;
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
        
        return (
            <div>
                <StyledBackgroundImage backgroundImage={ specificElement.cover } />
                {specificElement.pictures.map((picture, index) => (
                    <Element key={index}>{ picture }</Element>
                    ))} {/* Using map to iterate on specificElement.pictures array */}
                <Element>{ specificElement.title }</Element>
                <Element>{ specificElement.description }</Element>
                <Element>{ specificElement.host.name }</Element>
                <Element>{ specificElement.host.picture }</Element>
                <Element>{ specificElement.rating }</Element>
                <Element>{ specificElement.location }</Element>
                {specificElement.equipments.map((equipment, index) => (
                    <Element key={index}>{ equipment }</Element>
                ))}
                {specificElement.tags.map((tag, index) => (
                    <Element key={index}>{ tag }</Element>
                ))}
        </div>
        );
    }
}

export default SpecificThumb;