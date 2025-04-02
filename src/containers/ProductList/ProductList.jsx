import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.style.css';


/**
 * USAGE: ProductList description to complete.
 * @example
 * <ProductList /> 
 */
const ProductList = ({propName = 'DefaultPropValue'}) => (
  <div className="ProductList" data-testid="ProductList">
    ProductList Component
  </div>
);

ProductList.propTypes = {
  propName: PropTypes.string,
};

export default ProductList;