import React from 'react';
import PropTypes from 'prop-types';
import './BaseFooter.style.css';


/**
 * USAGE: BaseFooter description to complete.
 * @example
 * <BaseFooter /> 
 */
const BaseFooter = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseFooter" data-testid="BaseFooter">
    BaseFooter Component
  </div>
);

BaseFooter.propTypes = {
  propName: PropTypes.string,
};

export default BaseFooter;