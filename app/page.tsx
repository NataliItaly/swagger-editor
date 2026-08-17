import Link from 'next/link';
import { createClient } from '@/lib/supabase-server';

export default async function HomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuth = !!user;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome to swagger-no-5</h1>
      {!isAuth && (
        <div className="flex gap-4">
          <Link
            href="/sign-in"
            className="px-4 py-2 border border-gray-300 text-white rounded-xl hover:bg-gray-700 transition duration-500"
          >
            log in
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-700 transition duration-500"
          >
            Registration
          </Link>
        </div>
      )}
      <div className="flex justify-center mt-5">
        <Link
          className="py-4 px-7 border rounded-xl border-gray-300 bg-purple-900 transition-all duration-500 hover:bg-purple-700 cursor-pointer"
          href="/swagger"
        >
          Try Swagger
        </Link>
      </div>
    </div>
  );
}
