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

    const [dataContent, setDataContent] = useState();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const dataContent = await (
                await fetch(
                "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
                )
            ).json();

        // set state when the data received
        setDataContent(dataContent);
        };

        dataFetch();
    }, []);

    return (
        <HomeBodyContainer>
            <HomeBodyThumb />
            <HomeBodyThumb />
            <HomeBodyThumb />
            <HomeBodyThumb />
            <HomeBodyThumb />
            <HomeBodyThumb />
        </HomeBodyContainer>
    )
}

export default HomeBody;