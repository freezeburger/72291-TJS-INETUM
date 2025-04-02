import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.style.css';


/**
 * USAGE: LoginForm description to complete.
 * @example
 * <LoginForm /> 
 */
const LoginForm = ({propName = 'DefaultPropValue'}) => (
  <div className="LoginForm" data-testid="LoginForm">
    LoginForm Component
  </div>
);

LoginForm.propTypes = {
  propName: PropTypes.string,
};

export default LoginForm;