import React from 'react'
import styled from 'styled-components'

const InfoCardDiv = styled.div`
    width: 30%;
    padding: 1%;
    box-shadow: 2px 2px 10px ${pr => pr.theme.jetBlack};
    border-radius: 10px;
    text-align: center;
`

function InfoCard(props) {
    const { text } = props;

    return (
        <InfoCardDiv>
            <p>{text}</p>
        </InfoCardDiv>
    )

}

export default InfoCard;