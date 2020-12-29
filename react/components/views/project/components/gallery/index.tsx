import React, { useState } from 'react';
import * as styledComponents from './styled-components';

export const Gallery = (props) => {
    const [galleryMainImage, setGalleryMainImage] = useState(props.images[0])

    const galleryThumbnailsItemOnClick = (image) => {
        setGalleryMainImage(image);
    }

    return (
        <styledComponents.Gallery>
            <styledComponents.GalleryMain image={galleryMainImage} />
            <styledComponents.GalleryThumbnails>
                {
                    props.images.map((image, index) => {
                        return (
                            <styledComponents.GalleryThumbnailsItem 
                                key={index}
                                image={image}
                                onClick={() => galleryThumbnailsItemOnClick(image)}
                            />
                        )
                    })
                }
            </styledComponents.GalleryThumbnails>
        </styledComponents.Gallery>
    )
};


Gallery.defaultProps = {
    context: `there's no context listed`,
    responsibilities: `there's no responsibilities listed`,
    technologies: `there's no technologies listed`
}