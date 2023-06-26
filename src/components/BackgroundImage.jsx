import React from "react"

function BackgroundImage({ backgroundImage }) {
    return(
        <div className='backgroundImage'>
            <img src={backgroundImage} className="backgroundImage" alt="Vue de mer et rochers" />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default BackgroundImage;