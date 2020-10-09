import React from 'react';
import styled from 'styled-components'

const ImageDiv = styled.div`
    width: 60%;
    padding: 1%;
    box-shadow: 2px 2px 10px ${pr => pr.theme.jetBlack};
    border-radius: 10px;
    @media (max-width: 800px) {
        width:90%;
    }
    img {
        max-width: 100%;
        vertical-align: middle;
    }
    h3 {
        font-size:.75rem;
    }
`

export default function DisplayAPOD(props) {
    const { image, title, copyright, date } = props;

    return (
        <ImageDiv>
            <h2>{title}</h2>
            <img src={image} alt='Oblong blue nebula on red'></img>
            <h3>{copyright} - {date}</h3>
        </ImageDiv>

    )
}


