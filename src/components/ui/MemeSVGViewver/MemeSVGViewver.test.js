import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemeSVGViewver from './MemeSVGViewver';

describe('<MemeSVGViewver />', () => {
  test('it should mount', () => {
    render(<MemeSVGViewver />);

    const MemeSVGViewver = screen.getByTestId('MemeSVGViewver');

    expect(MemeSVGViewver).toBeInTheDocument();
  });
});