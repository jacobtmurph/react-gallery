import React from 'react';

const Image = props => {
   return( 
        <li>
            {/* Create an image for the Gallery ul, with dynamic srcs.  */}
            <img src={props.src} alt=""/>
        </li>
   )
}

export default Image; 