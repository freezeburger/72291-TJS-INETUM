import React from 'react';
import PropTypes from 'prop-types';
import './BaseCategoryItem.style.css';


/**
 * USAGE: BaseCategoryItem description to complete.
 * @example
 * <BaseCategoryItem /> 
 */
const BaseCategoryItem = ({propName = 'DefaultPropValue'}) => (
  <div className="BaseCategoryItem" data-testid="BaseCategoryItem">
    BaseCategoryItem Component
  </div>
);

BaseCategoryItem.propTypes = {
  propName: PropTypes.string,
};

export default BaseCategoryItem;