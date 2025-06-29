import React from 'react';
import { render } from '@testing-library/react';
import Page from '../src/app/(home)/page';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Mocked message' }),
  })
) as jest.Mock;

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
