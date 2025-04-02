import React from 'react';
import PropTypes from 'prop-types';
import './CategoriesCarousel.style.css';
import { BaseCategoryItem } from '../../components';



/**
 * USAGE: CategoriesCarousel description to complete.
 * @example
 * <CategoriesCarousel /> 
 */
const CategoriesCarousel = ({propName = 'DefaultPropValue'}) => (
  <div className="CategoriesCarousel" data-testid="CategoriesCarousel">
    CategoriesCarousel Component
    <BaseCategoryItem />
  </div>
);

CategoriesCarousel.propTypes = {
  propName: PropTypes.string,
};

export default CategoriesCarousel;