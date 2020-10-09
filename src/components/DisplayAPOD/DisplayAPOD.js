import React from 'react';
import Image from './Image/Image'
import InfoCard from './InfoCard/InfoCard'
import styled from 'styled-components'

const StyledDivAPOD = styled.div`
    background-color: ${pr => pr.theme.timberwolf};
    padding: 2% 0;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 800px) {
        flex-wrap: wrap;
    }
`

export default function DisplayAPOD(props) {
    const { nasaAPOD } = props;

    return (
        <StyledDivAPOD>
            <Image image={nasaAPOD.url} title={nasaAPOD.title} date={nasaAPOD.date} copyright={nasaAPOD.copyright} />
            <InfoCard text={nasaAPOD.explanation} />
        </StyledDivAPOD>
    )

}