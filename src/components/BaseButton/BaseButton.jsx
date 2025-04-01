import React from 'react';
import PropTypes from 'prop-types';

import './BaseButton.style.css';


/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton /> 
 */
const BaseButton = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseButton" data-testid="BaseButton">
    BaseButton Component
  </div>
);

BaseButton.propTypes = {
  propName: PropTypes.string,
};

export default BaseButton;