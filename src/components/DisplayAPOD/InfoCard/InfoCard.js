import React from 'react'

function InfoCard(props) {
    const { title, date, copyright, text } = props;

    return (
        <div className='infoCard'>
            <h2>{title}</h2>
            <h3>{copyright} - {date}</h3>
            <p>{text}</p>
        </div>
    )

}

export default InfoCard;