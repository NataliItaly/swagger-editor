import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import Header from './Header';

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>,
}));

vi.mock('../ThemeToggle/ThemeToggle', () => ({
  default: () => <button>Theme Toggle</button>,
}));

describe('Header', () => {
  it('renders logo', () => {
    const { getByText } = render(<Header />);

    expect(getByText('SwaggerAPI')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Swagger').closest('a')).toHaveAttribute(
      'href',
      '/swagger',
    );

    expect(getByText('History').closest('a')).toHaveAttribute(
      'href',
      '/history',
    );

    expect(getByText('About').closest('a')).toHaveAttribute('href', '/about');
  });

  it('renders theme toggle', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('button')).toBeInTheDocument();
  });
});
