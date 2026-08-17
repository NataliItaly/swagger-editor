'use client';

import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuth(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuth(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Header isAuth={isAuth} />
      <main className="py-5 dark:bg-gray-900 dark:text-white">{children}</main>
    </>
  );
}
