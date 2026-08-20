import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="flex flex-col items-center gap-6 text-lg">
      <div className="lg:max-w-1/2 max-w-full">
        <h1 className="text-purple-900 dark:text-purple-400 text-2xl font-bold text-center mb-3">
          {t('title')}
        </h1>
        <div>
          <p>{t('intro')}</p>
          <p className="mt-2.5 text-center">
            <a
              className="text-purple-800 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-100 text-xl"
              href="https://github.com/dzzuze/swagger-no-5"
              target="_blank"
            >
              {t('teamRepo')}
            </a>
          </p>
          <p className="mb-2.5 text-center">
            <a
              className="text-purple-800 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-100 text-xl"
              href="https://github.com/NataliItaly/swagger-editor"
              target="_blank"
            >
              {t('myRepo')}
            </a>
          </p>
          <p>{t('description')}</p>
        </div>
      </div>
      <div className="lg:max-w-1/2  max-w-full">
        <h2 className="text-purple-900 dark:text-purple-400 text-xl font-bold text-center">
          Technology Stack
        </h2>
        <div className="text-base">
          <strong className="text-purple-900 dark:text-purple-400 text-xl">
            Framework:
          </strong>{' '}
          Next.js 16 (App Router), React 19, TypeScript
        </div>
        <div>
          <strong className="text-purple-900 text-xl dark:text-purple-400">
            Styling:
          </strong>{' '}
          Tailwind CSS v4, Shadcn/ui, Lucide, React icons
        </div>
        <div>
          <strong className="text-purple-900 text-xl dark:text-purple-400">
            API & Data:
          </strong>{' '}
          OpenAPI 3.0, Swagger Parser, js-yaml, Fetch API, Next.js Route
          Handlers
        </div>
        <div>
          <strong className="text-purple-900 text-xl dark:text-purple-400">
            Backend & Authentication:
          </strong>{' '}
          Supabase, Supabase Authentication, Supabase Database
        </div>
        <div>
          <strong className="text-purple-900 text-xl dark:text-purple-400">
            State & Utilities:
          </strong>{' '}
          React Hooks, TanStack React Query, Zustand (prepared for state
          management), next-themes
        </div>
        <div>
          <strong className="text-purple-900 text-xl dark:text-purple-400">
            Development Tools:
          </strong>{' '}
          ESLint Prettier, Husky, lint-staged Vitest
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-purple-900 dark:text-purple-400 text-xl font-bold">
          {t('team')}
        </h2>
        <p>
          Team lead: Tema Temov&nbsp;
          <Link
            className="text-xl text-purple-900 hover:text-purple-700 dark:text-purple-400"
            href="https://github.com/dzzuze"
            target="_blank"
            rel="noopener noreferrer"
          >
            dzzuze
          </Link>
        </p>
        <p>
          Nataliya Krylova&nbsp;
          <Link
            className="text-xl text-purple-900 hover:text-purple-700 dark:text-purple-400"
            href="https://github.com/NataliItaly"
            target="_blank"
            rel="noopener noreferrer"
          >
            NataliItaly
          </Link>
        </p>
        <p>
          Savely Kosevich&nbsp;
          <Link
            className="text-xl text-purple-900 hover:text-purple-700 dark:text-purple-400"
            href="https://github.com/Save1i"
            target="_blank"
            rel="noopener noreferrer"
          >
            Save1i
          </Link>
        </p>
      </div>
      <div className="text-center text-purple-900 dark:text-purple-400">
        <p>
          <Link
            className="hover:text-purple-500"
            href="https://rs.school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School
          </Link>
        </p>
        <p>
          <Link
            className="hover:text-purple-500"
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Course
          </Link>
        </p>
        <p>
          <Link
            className="hover:text-purple-500"
            href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/final.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Task link
          </Link>
        </p>
      </div>
    </div>
  );
}
