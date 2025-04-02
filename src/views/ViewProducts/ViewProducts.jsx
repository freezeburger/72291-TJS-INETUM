import React from 'react';
import PropTypes from 'prop-types';
import './ViewProducts.style.css';


/**
 * USAGE: ViewProducts description to complete.
 * @example
 * <ViewProducts /> 
 */
const ViewProducts = ({propName = 'DefaultPropValue'}) => (
  <div className="ViewProducts" data-testid="ViewProducts">
    ViewProducts Component
  </div>
);

ViewProducts.propTypes = {
  propName: PropTypes.string,
};

export default ViewProducts;