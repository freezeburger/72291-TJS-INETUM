import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.style.css';
import { BaseProductItem } from '../../components';


/**
 * USAGE: ProductList description to complete.
 * @example
 * <ProductList /> 
 */
const ProductList = ({propName = 'DefaultPropValue'}) => (
  <div className="ProductList" data-testid="ProductList">
    ProductList Component
    <BaseProductItem />
  </div>
);

ProductList.propTypes = {
  propName: PropTypes.string,
};

export default ProductList;