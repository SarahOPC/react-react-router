import HomeBodyThumb from "./HomeBodyThumb";
import styled from 'styled-components';
import { useState, useEffect } from "react";

const HomeBodyContainer = styled.div`
    background-color: #F6F6F6;
    padding: 4%;
    border-radius: 1.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 2% 4% 1% 4%;

    @media(max-width: 550px) {
        justify-content: center;
        flex-direction: column;
        width: auto;
        background-color: transparent;
        padding: 0%;
    }
`;

function HomeBody() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        // fetch data with the proxy url
        fetch("/api/logements.json")
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.error("Error fetching data : ", error);
            });
    }, []); // to ensure the effect only runs once after the initial render

    return (
        <HomeBodyContainer>
            {data.map((item) => (
                <HomeBodyThumb key={item.id} title={item.title} id={item.id} cover={item.cover} />
            ))}
        </HomeBodyContainer>
    );
}

export default HomeBody;