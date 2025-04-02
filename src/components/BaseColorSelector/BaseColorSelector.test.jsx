import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BaseColorSelector from './BaseColorSelector';

describe('<BaseColorSelector />', () => {
  test('it should mount', () => {
    render(<BaseColorSelector />);

    const baseColorSelector = screen.getByTestId('BaseColorSelector');

    expect(baseColorSelector).toBeInTheDocument();
  });
});
