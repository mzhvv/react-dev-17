// src/app.test.tsx

import { render, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  it('renders the heading', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('react-dev-17');
  });
});
