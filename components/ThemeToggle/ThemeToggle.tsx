'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  //const { theme, setTheme } = useTheme();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      className="rounded border p-2"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
}
