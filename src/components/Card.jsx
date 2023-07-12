import HomeBodyThumb from "./HomeBodyThumb";
import styled from 'styled-components';
import { useState, useEffect } from "react";

const HomeBodyContainer = styled.div`
    background-color: #F6F6F6;
    padding: 2%;
    border-radius: 1.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 4%;
`

function HomeBody() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        // fetch data with the proxy url
        fetch("/api/logements.json")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data : ", data)
                setData(data)
            })
            .catch(error => {
                console.error("Error fetching data : ", error);
            });
    }, []); // to ensure the effect only runs once after the initial render

    return (
        <HomeBodyContainer>
            {data.map((item) => (
                <HomeBodyThumb key={item.id} title={item.title} />
            ))}
        </HomeBodyContainer>
    );
}

export default HomeBody;