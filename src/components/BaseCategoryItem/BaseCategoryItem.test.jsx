import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseCategoryItem from './BaseCategoryItem';

describe('<BaseCategoryItem />', () => {
  test('it should mount', () => {
    render(<BaseCategoryItem />);

    const baseCategoryItem = screen.getByTestId('BaseCategoryItem');

    expect(baseCategoryItem).toBeInTheDocument();
  });
});
