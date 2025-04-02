import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.style.css';
import { BaseButton } from '../../components';

/**
 * USAGE: LoginForm description to complete.
 * @example
 * <LoginForm /> 
 */
const LoginForm = ({ propName = 'DefaultPropValue' }) => {

  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <div className="LoginForm" data-testid="LoginForm">
      LoginForm Component

      <BaseButton onClick={handleClick} > LOGIN </BaseButton>

    </div>
  );
}

LoginForm.propTypes = {
  propName: PropTypes.string,
};

export default LoginForm;