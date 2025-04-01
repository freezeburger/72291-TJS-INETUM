import React from 'react';
import PropTypes from 'prop-types';
import './BaseColorSelector.style.css';


/**
 * USAGE: BaseColorSelector description to complete.
 * @example
 * <BaseColorSelector /> 
 */
const BaseColorSelector = ({propName = 'DefaultPropValue'}) => (
  <div className={BaseColorSelector} data-testid="BaseColorSelector">
    BaseColorSelector Component
  </div>
);

BaseColorSelector.propTypes = {
  propName: PropTypes.string,
};

export default BaseColorSelector;