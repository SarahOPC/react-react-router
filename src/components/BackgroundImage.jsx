import React from "react"
import styled from 'styled-components'

function BackgroundImage({ backgroundImage, alt, slogan }) {

    const BackgroundImageDiv = styled.div `
        filter: brightness(0.7);
        background-image: url(${backgroundImage});
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30vh;
        border-radius: 2em;
        `
        
        const SloganText = styled.h1`
        color: #FFFFFF;
        position: absolute;
        top: 32%;
        left: 35%;
        `
        
    const ImageDivBkgd = styled.div`
        margin: 2%;
        position: relative;
        
    `

    return(
        <div>
            <ImageDivBkgd>
            <BackgroundImageDiv backgroundImage={backgroundImage} alt={alt}></BackgroundImageDiv>
            <SloganText>{slogan}</SloganText>
            </ImageDivBkgd>
        </div>
    )
}

export default BackgroundImage;