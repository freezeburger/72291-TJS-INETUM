import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import './ViewLogin.style.css';
import LoginForm from '../../containers/LoginForm';
import { BaseMain } from '../../components';

/**
 * USAGE: ViewLogin description to complete.
 * @example
 * <ViewLogin /> 
 */
const ViewLogin = ({propName = 'DefaultPropValue'}) => (
  <BaseMain 
    className="ViewLogin" 
    data-testid="ViewLogin" 
    style={{backgroundColor: '#ff3390', padding:'0'}}>
    <HeaderImage src="https://placeholderimage.eu/api/furniture/800/600" alt="Header Image" />
    <LoginForm />
  </BaseMain>
);

const HeaderImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  margin-bottom: 20px;
  position: absolute;
  top:0;
`

ViewLogin.propTypes = {
  propName: PropTypes.string,
};

export default ViewLogin;