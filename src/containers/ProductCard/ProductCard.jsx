import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.style.css';
import { BaseButton, BaseColorSelector, BaseQuantitySelector } from '../../components';


/**
 * USAGE: ProductCard description to complete.
 * @example
 * <ProductCard /> 
 */
const ProductCard = ({propName = 'DefaultPropValue'}) => (
  <div className="ProductCard" data-testid="ProductCard">
    ProductCard Component
    <BaseQuantitySelector />
    <BaseColorSelector />
    <BaseButton />
  </div>
);

ProductCard.propTypes = {
  propName: PropTypes.string,
};

export default ProductCard;