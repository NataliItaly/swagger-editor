import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-lg">
      <div className="lg:max-w-1/2 max-w-full">
        <h1 className="text-purple-900 dark:text-purple-300 text-2xl font-bold text-center mb-3">
          Swagger/OpenAPI UI
        </h1>
        <p className="mb-2.5 text-center">
          <strong>
            This app was made for RS School as React Course Final Team Project
          </strong>
        </p>
        <div>
          Swagger Workspace is a web application for working with OpenAPI
          (Swagger) specifications. It allows users to create, edit, validate,
          and explore API schemas in both YAML and JSON formats. The application
          automatically parses OpenAPI documents, displays available endpoints,
          lets users execute requests directly from the interface, generates
          cURL commands, and provides formatted server responses.
        </div>
      </div>
      <div className="lg:max-w-1/2  max-w-full">
        <h2 className="text-purple-900 dark:text-purple-300 text-xl font-bold text-center">
          Technology Stack
        </h2>
        <div className="text-base">
          <strong className="text-purple-900 dark:text-purple-300 text-lg">
            Framework:
          </strong>{' '}
          Next.js 16 (App Router), React 19, TypeScript
        </div>
        <div>
          <strong className="text-purple-900 dark:text-purple-300">
            Styling:
          </strong>{' '}
          Tailwind CSS v4, Shadcn/ui, Lucide, React icons
        </div>
        <div>
          <strong className="text-purple-900 dark:text-purple-300">
            API & Data:
          </strong>{' '}
          OpenAPI 3.0, Swagger Parser, js-yaml, Fetch API, Next.js Route
          Handlers
        </div>
        <div>
          <strong className="text-purple-900 dark:text-purple-300">
            Backend & Authentication:
          </strong>{' '}
          Supabase, Supabase Authentication, Supabase Database
        </div>
        <div>
          <strong className="text-purple-900 dark:text-purple-300">
            State & Utilities:
          </strong>{' '}
          React Hooks, TanStack React Query, Zustand (prepared for state
          management) next-themes
        </div>
        <div>
          <strong className="text-purple-900 dark:text-purple-300">
            Development Tools:
          </strong>{' '}
          ESLint Prettier, Husky, lint-staged Vitest
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-purple-900 dark:text-purple-300 text-xl font-bold">
          Our Team
        </h2>
        <p>
          Team lead: Tema Temov
          <Link
            href="https://github.com/dzzuze"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
        <p>
          Nataliya Krylova
          <Link
            href="https://github.com/NataliItaly"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
        <p>
          Savely Kosevich
          <Link
            href="https://github.com/Save1i"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="text-center text-purple-900 dark:text-purple-300">
        <p>
          <Link
            href="https://rs.school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RS School
          </Link>
        </p>
        <p>
          <Link
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Course
          </Link>
        </p>
        <p>
          <Link
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
