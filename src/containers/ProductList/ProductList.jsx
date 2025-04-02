import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.style.css';
import { BaseButton, BaseProductItem } from '../../components';
import { ActionTypes, useStore } from '../../store';


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

      <BaseButton
        onClick={() => dispatch({ type: ActionTypes.FETCH_PRODUCTS_REQUEST })}>
        Load Data
      </BaseButton>

      {
        state.products.map((product) => (
          <BaseProductItem
            key={product.id}
            product={product}
          />
        ))
      }


    </div>
  )
};

ProductList.propTypes = {
  propName: PropTypes.string,
};

export default ProductList;