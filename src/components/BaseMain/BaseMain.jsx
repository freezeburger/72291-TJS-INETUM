import React from 'react';
import PropTypes from 'prop-types';
import './BaseMain.style.css';


/**
 * USAGE: BaseMain description to complete.
 * @example
 * <BaseMain /> 
 */
const BaseMain = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseMain" data-testid="BaseMain">
    BaseMain Component
  </div>
);

BaseMain.propTypes = {
  propName: PropTypes.string,
};

export default BaseMain;