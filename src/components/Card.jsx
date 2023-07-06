import HomeBodyThumb from "./HomeBodyThumb";
import styled from 'styled-components';

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