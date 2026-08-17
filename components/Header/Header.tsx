'use client';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

type HeaderProps = {
  isAuth: boolean;
};

export default function Header({ isAuth }: HeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className="flex justify-between gap-6 items-center px-6 py-5 border-b border-gray-400 ">
      <nav className="flex gap-10 items-center">
        <Link href="/">
          <span className="text-2xl font-bold">SwaggerAPI</span>
        </Link>
        <ul className="flex items-center gap-6 text-xl">
          <li>
            <Link href="/swagger">Swagger</Link>
          </li>
          {isAuth && (
            <li>
              <Link href="/history">History</Link>
            </li>
          )}
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {isAuth && (
          <button
            onClick={handleSignOut}
            className="text-base font-medium px-4 py-1.5 border border-purple-500 rounded-xl hover:bg-purple-700 hover:text-white transition-all duration-500 cursor-pointer"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
