import React from 'react';
import PropTypes from 'prop-types';

import './BaseButton.style.css';


/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton /> 
 */
const BaseButton = ({propName = 'DefaultPropValue'}) => (
  <button style={styles} className="BaseButton" data-testid="BaseButton">
    BaseButton Component
  </button>
);

const styles = {
    backgroundColor: "orange",
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: "5px",
    cursor: 'pointer'
}

BaseButton.propTypes = {
  propName: PropTypes.string,
};

export default BaseButton;