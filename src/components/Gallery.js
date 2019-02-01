import React from 'react';
import Image from './Image';

const Gallery = (props, match) => {
    //Add the retrived images from the ResultPage to the results variable
    const results = props.pics;
    //Turn each image into it's own Image element in the array.
    let images = results.map(image =>  
        <Image src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} alt="" />
    );

    //Returned JSX
    return (
        <div className="photo-container">
            {/* If there's been a search */}
            {
                (props.searchTag)
                // Display a title showing the searched word
                ?<h2>{props.searchTag} Images</h2>
                // Else, display a general header
                :<h2>Images</h2>
            }
            {/* If there are images */}
            {
                (images.length > 0)
                // Display them
                ?<ul>
                    { images }
                </ul>
                // Else, tell the user that no images were found
                :<p>No images found for this search</p>
            }
            
        </div>
    )

};

//Export the Gallery
export default Gallery;