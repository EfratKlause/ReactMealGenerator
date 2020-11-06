import React from 'react';
import ProductFavoriteButton from '../src/ProductFavoriteButton'
import ProductImage from '../src/ProductImage'

class Card extends React.Component {
    render() {
      {/*each time we use a component we get a different instance of class 'Card', and this is why with props each component will have its own data*/}
      const product = this.props;
      return (
        <div className="card card-1">
          <div>
             <div>{product.name}</div>
             <div className="heartbutton">
             <ProductFavoriteButton isFavorite={product.isFavorite}/>
             </div>
          </div>
          <div>
            <ProductImage id={product.id} name={product.name}/>
          </div>
          <div className="cardText">
            <div>{product.name}</div>
            <div>{product.group}</div>
          </div>
      </div>
      );
    }
  }
  
  export default Card;