import React from 'react';
import Image from './Image/Image'
import InfoCard from './InfoCard/InfoCard'


export default function DisplayAPOD(props) {
    const { nasaAPOD } = props;

    return (
        <div className='displayAPOD'>
            <Image image={nasaAPOD.url} />
            <InfoCard title={nasaAPOD.title} date={nasaAPOD.date} copyright={nasaAPOD.copyright} text={nasaAPOD.explanation} />
        </div>
    )

}