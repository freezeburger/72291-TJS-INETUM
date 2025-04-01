import React from 'react';
import PropTypes from 'prop-types';
import './TemplateName.style.css';


/**
 * USAGE: TemplateName description to complete.
 * @example
 * <TemplateName /> 
 */
const TemplateName = ({propName = 'DefaultPropValue'}) => (
  <div className="TemplateName" data-testid="TemplateName">
    TemplateName Component
  </div>
);

TemplateName.propTypes = {
  propName: PropTypes.string,
};

export default TemplateName;