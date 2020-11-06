import React from 'react';

function ProductImage({id, name}) {
    const imageUrl = `/images/${name}-${id}.jpg`;
    return (
            <img 
            src={imageUrl}
            animationDuration="1"
            width={250}
            height={250}
            applyAspecRatio="true"
            /> 
    );
}

export default ProductImage;