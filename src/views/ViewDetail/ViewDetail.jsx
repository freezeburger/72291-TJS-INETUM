import React from 'react';
import PropTypes from 'prop-types';
import './ViewDetail.style.css';
import ProductCard from '../../containers/ProductCard';


/**
 * USAGE: ViewDetail description to complete.
 * @example
 * <ViewDetail /> 
 */
const ViewDetail = ({propName = 'DefaultPropValue'}) => (
  <div className="ViewDetail" data-testid="ViewDetail">
    ViewDetail Component
    <ProductCard />
  </div>
);

ViewDetail.propTypes = {
  propName: PropTypes.string,
};

export default ViewDetail;