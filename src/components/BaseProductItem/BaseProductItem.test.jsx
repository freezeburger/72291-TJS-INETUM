import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseProductItem from './BaseProductItem';

describe('<BaseProductItem />', () => {
  test('it should mount', () => {
    render(<BaseProductItem />);

    const baseProductItem = screen.getByTestId('BaseProductItem');

    expect(baseProductItem).toBeInTheDocument();
  });
});
