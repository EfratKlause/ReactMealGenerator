import React from 'react';

const ProductFavoriteButton = ({isFavorite, onFavoriteToggle}) => {
    return (
        <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}>
        </div>
    );
}

export default ProductFavoriteButton;