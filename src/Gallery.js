import React from 'react';
import Image from './Image';

const Gallery = props => {
    
    const results = props.pics;
    let images = results.map(image =>  
        <Image src={`https://farm{image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
    );

    return (
        <h1>Results</h1>
        <div className="photo-container">
            <ul>
                { images }
            </ul>
        </div>
    )

};
export default Gallery;