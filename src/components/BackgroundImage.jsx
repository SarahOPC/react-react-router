import React from "react"
import styled from 'styled-components'

function BackgroundImage({ backgroundImage, alt, slogan }) {

    const BackgroundImageDiv = styled.div `
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 30vh;
        margin: 2%;
        border-radius: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${backgroundImage});

    `

    const SloganText = styled.p`
        color: #FFFFFF;
        font-weight: 500;
        font-size: 2.5em;
    `
    return(
        <div>
            <BackgroundImageDiv backgroundImage={backgroundImage} alt={alt}>
                <SloganText>{slogan}</SloganText>
            </BackgroundImageDiv>
        </div>
    )
}

export default BackgroundImage;