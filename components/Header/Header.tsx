'use client';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between gap-6 items-center px-6 py-5 border-b border-gray-400 ">
      <nav className="flex gap-10 items-center">
        <div className="text-2xl font-bold">SwaggerAPI</div>
        <ul className="flex items-center gap-6 text-xl">
          <li>
            <Link href="/swagger">Swagger</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
