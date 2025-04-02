import React from 'react';
import PropTypes from 'prop-types';
import './ViewLogin.style.css';
import LoginForm from '../../containers/LoginForm';
import { BaseMain } from '../../components';


/**
 * USAGE: ViewLogin description to complete.
 * @example
 * <ViewLogin /> 
 */
const ViewLogin = ({propName = 'DefaultPropValue'}) => (
  <BaseMain className="ViewLogin" data-testid="ViewLogin">
    ViewLogin Component
    <LoginForm />
  </BaseMain>
);

ViewLogin.propTypes = {
  propName: PropTypes.string,
};

export default ViewLogin;