import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseQuantitySelector from './BaseQuantitySelector';

describe('<BaseQuantitySelector />', () => {
  test('it should mount', () => {
    render(<BaseQuantitySelector />);

    const baseQuantitySelector = screen.getByTestId('BaseQuantitySelector');

    expect(baseQuantitySelector).toBeInTheDocument();
  });
});
