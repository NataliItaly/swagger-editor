'use client';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setLocale } from '@/app/actions/locale';

export default function LanguageToggle() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function changeLanguage(locale: 'en' | 'it') {
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div className="flex gap-0.5 items-center justify-center">
      <button
        type="button"
        disabled={isPending}
        onClick={() => changeLanguage('en')}
        className="block rounded-md w-8 py-1 cursor-pointer hover:bg-purple-800 hover:text-white transition duration-500"
      >
        EN
      </button>
      <span>/</span>
      <button
        type="button"
        disabled={isPending}
        onClick={() => changeLanguage('it')}
        className="block rounded-md w-8 py-1 cursor-pointer hover:bg-purple-800 hover:text-white transition duration-500"
      >
        IT
      </button>
    </div>
  );
}
