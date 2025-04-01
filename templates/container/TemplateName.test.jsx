import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<templatename />);

    const templateName = screen.getByTestId('TemplateName');

    expect(templateName).toBeInTheDocument();
  });
});
