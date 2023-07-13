import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThumbContainer = styled.div`
    width: 23em;
    height: 23em;
    background: linear-gradient(to bottom right, #FF6060, #454545);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1.5em;
    margin: 2%;
    border-radius: 3%;
`;

const ThumbTitle = styled.p`
    color: white;
    margin-bottom: 1.5em;
    margin-inline-start: 1.5em;
    font-size: 1.13em;
    width: 11em;
`;

function HomeBodyThumb({ title, id }) {

    return (
        <Link to={`/thumb/${id}`}>
            <ThumbContainer key = {id}>
                <ThumbTitle>{title}</ThumbTitle>
            </ThumbContainer>
        </Link>
    );
}

export default HomeBodyThumb;