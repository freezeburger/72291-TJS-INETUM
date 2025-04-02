import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoriesCarousel from './CategoriesCarousel';

describe('<CategoriesCarousel />', () => {
  test('it should mount', () => {
    render(<CategoriesCarousel />);

    const categoriesCarousel = screen.getByTestId('CategoriesCarousel');

    expect(categoriesCarousel).toBeInTheDocument();
  });
});
