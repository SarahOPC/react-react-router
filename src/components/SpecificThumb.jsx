import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Element = styled.p`
    color : black;`

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
                <Element>{ specificElement.title }</Element>
                <Element>{ specificElement.cover }</Element>
                {specificElement.pictures.map((picture, index) => (
                    <Element key={index}>{ picture }</Element>
                ))} {/* Using map to iterate on specificElement.pictures array */}
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