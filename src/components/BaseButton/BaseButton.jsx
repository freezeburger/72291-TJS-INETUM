import React from 'react';
import PropTypes from 'prop-types';

import './BaseButton.style.css';


/**
 * USAGE: BaseButton description to complete.
 * @example
 * <BaseButton> Content </BaseButton>
 */
const BaseButton = ({children = 'DefaultPropValue'}) =>{ 
  return (
    <button style={styles} className="BaseButton" data-testid="BaseButton">
      {children}
    </button>
  );
}

const styles = {
    backgroundColor: "orange",
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: "5px",
    cursor: 'pointer'
}

BaseButton.propTypes = {
  children: PropTypes.string,
};

export default BaseButton;