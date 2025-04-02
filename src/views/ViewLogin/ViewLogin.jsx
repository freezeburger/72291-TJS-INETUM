import React from 'react';
import PropTypes from 'prop-types';
import './ViewLogin.style.css';


/**
 * USAGE: ViewLogin description to complete.
 * @example
 * <ViewLogin /> 
 */
const ViewLogin = ({propName = 'DefaultPropValue'}) => (
  <div className="ViewLogin" data-testid="ViewLogin">
    ViewLogin Component
  </div>
);

ViewLogin.propTypes = {
  propName: PropTypes.string,
};

export default ViewLogin;