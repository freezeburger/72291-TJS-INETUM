import React from 'react';
import PropTypes from 'prop-types';
import './BaseProductItem.style.css';


/**
 * USAGE: BaseProductItem description to complete.
 * @example
 * <BaseProductItem /> 
 */
const BaseProductItem = ({product}) => (
  <div className="BaseProductItem" data-testid="BaseProductItem">
    <img src={product.image} alt={product.name} />
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <p>{product.price} €</p>
  </div>
);

BaseProductItem.propTypes = {
  propName: PropTypes.string,
};

export default BaseProductItem;