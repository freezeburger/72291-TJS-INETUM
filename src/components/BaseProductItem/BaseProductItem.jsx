import React from 'react';
import PropTypes from 'prop-types';
import './BaseProductItem.style.css';


/**
 * USAGE: BaseProductItem description to complete.
 * @example
 * <BaseProductItem /> 
 */
const BaseProductItem = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseProductItem" data-testid="BaseProductItem">
    BaseProductItem Component
  </div>
);

BaseProductItem.propTypes = {
  propName: PropTypes.string,
};

export default BaseProductItem;