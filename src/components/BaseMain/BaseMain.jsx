import React from 'react';
import PropTypes from 'prop-types';
import './BaseMain.style.css';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  background-color: #f0f0f0;
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  width: 100%;
  
  font-size: 24px;
  color: #333;
`

/**
 * USAGE: BaseMain description to complete.
 * @example
 * <BaseMain /> 
 */
const BaseMain = (props) => (
  <StyledMain className="BaseMain" data-testid="BaseMain" {...props} />
);

BaseMain.propTypes = {
  propName: PropTypes.string,
};

export default BaseMain;