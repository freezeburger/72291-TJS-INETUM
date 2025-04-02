import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.style.css';
import { BaseButton } from '../../components';

import styled from '@emotion/styled';

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
      FURNISH
      Furniture Shop App

      <input type="text" />
      <input type="text" />
      <BaseButton onClick={handleClick} > LOGIN </BaseButton>

      Don't have an account yet ?
      Create an account.
      `
    </div>
  );
}

const Title = styled.h1`
  
`

const SubTitle = styled.h2`
  
`
const Text = styled.p`
  
`

const Input = styled.input`
  
`

const Link = styled.a`

`

LoginForm.propTypes = {
  propName: PropTypes.string,
};

export default LoginForm;