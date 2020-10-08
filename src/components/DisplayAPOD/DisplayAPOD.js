import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Image from './Image/Image'
// import './DisplayAPOD.css'; // For when I make a .css

export default function DisplayAPOD(props) {
    const { nasaAPOD } = props;

    return (
        <div className='displayAPOD'>
            <Image title={nasaAPOD.title} image={nasaAPOD.url} date={nasaAPOD.date} copyright={nasaAPOD.copyright} />
        </div>
    )

}