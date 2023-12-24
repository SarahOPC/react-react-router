import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThumbContainer = styled.div`
    width: 100%;
    height: 23em;
    background: linear-gradient(to bottom right, #FF6060, #454545);
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5em;
    margin: 3% 0% 12% 0%;
    border-radius: 3%;

    @media (max-width: 550px) {
        margin: 6% 0%;
        height: 76%;
    }
`;

const ThumbTitle = styled.p`
    color: white;
    margin-bottom: 1.5em;
    margin-inline-start: 1.5em;
    font-size: 1.13em;
    width: 11em;

    @media (max-width: 550px) {
        margin-top: 13%;
    }
`;

const Picture = styled.img`
    width: 25em;
    height: 14em;
    border-radius: 0.5em;
    margin: -4% 1% 1% 1%;
    max-width: 97%;

    @media (max-width: 550px) {
        margin: -1% 1% 1% 1%;
    }
`;

const PictureContainer = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5% 0% 13% 0%;

    @media (max-width: 550px) {
        margin: 5% 0% 0% 0%;
    }
`;

function HomeBodyThumb({ title, id, cover }) {

    return (
        <Link to={`/thumb/${id}`} >
            <ThumbContainer key = {id}>
                <PictureContainer>
                    <Picture src={cover} alt={title} />
                </PictureContainer>
                <ThumbTitle>{title}</ThumbTitle>
            </ThumbContainer>
        </Link>
    );
}

export default HomeBodyThumb;