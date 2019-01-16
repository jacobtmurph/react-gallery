import React from 'react';
import Image from './Image';

const Gallery = (props, match) => {

    const results = props.pics;
    let images = results.map(image =>  
        <Image src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} alt="" />
    );

    return (
        <div className="photo-container">
            <h2>Images</h2>
            <ul>
                { images }
            </ul>
        </div>
    )

};
export default Gallery;