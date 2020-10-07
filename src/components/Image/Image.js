import React, { useState, useEffect } from 'react';

export default function DisplayAPOD(props) {
    const { title, image, date, copyright } = props;

    return (
        <div className='image'>
            <h2>{title}</h2>
            <img src={image} alt='Oblong blue nebula on red'></img>
            <h3>{copyright} - {date}</h3>
            {/* <h3>{date}</h3> */}
        </div>

    )
}


