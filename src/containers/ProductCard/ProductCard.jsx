import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.style.css';


/**
 * USAGE: ProductCard description to complete.
 * @example
 * <ProductCard /> 
 */
const ProductCard = ({propName = 'DefaultPropValue'}) => (
  <div className="ProductCard" data-testid="ProductCard">
    ProductCard Component
  </div>
);

ProductCard.propTypes = {
  propName: PropTypes.string,
};

export default ProductCard;