import styled from 'styled-components';
import { useState } from 'react';
import ChevronUpIcon from '../assets/chevron-up.png';
import ChevronDownIcon from '../assets/chevron-down.png';

const TitleRectangle = styled.div`
    background-color: #FF6060;
    color: #FFFFFF;
    padding: 1.5%;
    border-radius: 0.5em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`;

const ChevronIcon = styled.img`
    margin-right: 0.5em;
    width: 1em;
    height: 0.75em;
`;

const ContentRectangle = styled.div`
    color: #FF6060;
    margin: 3% 0%;
    padding: 1.5% 2.5% 5.5% 1.5%;

    p {
        color: #FF6060;
        font-size: 1em;
        margin-block-start: 0em;
    }
`;

const DescriptionTotalRectangle = styled.div`
    background-color: #F6F6F6;
    border-radius: 0em 0em 0.5em 0.5em;
`;

function DropDown({ rectangleTitle, content }) {
    const [isOpen, setIsOpen] = useState(false);

// useEffect not written because we don't have any specific side effects to handle based on the 'isOpen' state

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <DescriptionTotalRectangle>
                <TitleRectangle onClick={handleClick}>
                    { rectangleTitle }
                    <ChevronIcon src={isOpen ? ChevronUpIcon : ChevronDownIcon} alt="Chevron Icon" />
                </TitleRectangle>
                {isOpen && (
                    <ContentRectangle>{ content }</ContentRectangle>
                )}
            </DescriptionTotalRectangle>
        </div>
    );
}

export default DropDown;