import React from 'react';
import '../css/PageChegadaPortugueses.css';

import content from '../data/textChegadaPortugueses.json';

function PageChegadaPortugueses() {

    return (
        <>
        <h1> {content.title} </h1>

        {content.paragraphs.map( (paragraph) => (
            <div className='paragraph' key={paragraph.id}>
                <p>{paragraph.text}</p>
            </div>
        ))}
        </>
    )
}

export default PageChegadaPortugueses;