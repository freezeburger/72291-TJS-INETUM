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
    <img src={product.thumbnail} alt={product.title} />
    <h4>{product.title}</h4>
    <p>{product.price} €</p>
  </div>
);

BaseProductItem.propTypes = {
  propName: PropTypes.string,
};

export default BaseProductItem;