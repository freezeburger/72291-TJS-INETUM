import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.style.css';
import { BaseButton } from '../../components';

/**
 * USAGE: LoginForm description to complete.
 * @example
 * <LoginForm /> 
 */
const LoginForm = ({propName = 'DefaultPropValue'}) => (
  <div className="LoginForm" data-testid="LoginForm">
    LoginForm Component
    <BaseButton />
  </div>
);

LoginForm.propTypes = {
  propName: PropTypes.string,
};

export default LoginForm;