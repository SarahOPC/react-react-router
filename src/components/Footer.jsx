import logoFooter from "../assets/logoFooter.svg";
import styled from "styled-components";

const FooterDiv = styled.div`
    background-color: #000000;
    background-size: 100vh;
    height: 13em;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

    p {
        color: #FFFFFF;
        font-size: 1.5em;
        
        @media (max-width: 450px) {
            font-size: 0.75em;
            margin: 3em 0em;
        }
    }
`;

const FooterDivPlacementLow = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    justify-items: center;
    margin-bottom: 1em;
`;

function Footer() {

    return (
        <FooterDiv>
            <FooterDivPlacementLow>
                <img src={logoFooter} alt="logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </FooterDivPlacementLow>
        </FooterDiv>
    )
}

export default Footer;