import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.style.css';
import { BaseProductItem } from '../../components';
import { useStore } from '../../store';


/**
 * USAGE: ProductList description to complete.
 * @example
 * <ProductList /> 
 */
const ProductList = ({ propName = 'DefaultPropValue' }) => {

  const { state, dispatch } = useStore();
  return (
    <div className="ProductList" data-testid="ProductList">
      <h3>ProductList</h3>
      <p>{JSON.stringify(state)}</p>
      <BaseProductItem />
    </div>
  )
};

ProductList.propTypes = {
  propName: PropTypes.string,
};

export default ProductList;