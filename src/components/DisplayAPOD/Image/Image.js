import React from 'react';

export default function DisplayAPOD(props) {
    const { image } = props;

    return (
        <div className='image'>
            <img src={image} alt='Oblong blue nebula on red'></img>
        </div>

    )
}


