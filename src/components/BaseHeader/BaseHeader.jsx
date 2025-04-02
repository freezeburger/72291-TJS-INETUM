import React from 'react';
import PropTypes from 'prop-types';
import './BaseHeader.style.css';
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  display: block;
  background-color: #ac1aac;
  color: white;
  padding: 10px;
  border: none;
`;

/**
 * USAGE: BaseHeader description to complete.
 * @example
 * <BaseHeader /> 
 */
const BaseHeader = ({propName = 'DefaultPropValue'}) => (
  <StyledHeader className="BaseHeader" data-testid="BaseHeader">
    BaseHeader Component
  </StyledHeader>
);

BaseHeader.propTypes = {
  propName: PropTypes.string,
};

export default BaseHeader;