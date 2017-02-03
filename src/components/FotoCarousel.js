import React from 'react';
import uploadIcon from './images/camera_upload_freepix.svg';

const FotoCarousel = props => {

    return (
        <section>
            <input type="file" accept="image/*">
            </input>
        </section>
    );
};


export default FotoCarousel;