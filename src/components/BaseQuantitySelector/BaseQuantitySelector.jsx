import React from 'react';
import PropTypes from 'prop-types';
import './BaseQuantitySelector.style.css';


/**
 * USAGE: BaseQuantitySelector description to complete.
 * @example
 * <BaseQuantitySelector /> 
 */
const BaseQuantitySelector = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseQuantitySelector" data-testid="BaseQuantitySelector">
    BaseQuantitySelector Component
  </div>
);

BaseQuantitySelector.propTypes = {
  propName: PropTypes.string,
};

export default BaseQuantitySelector;