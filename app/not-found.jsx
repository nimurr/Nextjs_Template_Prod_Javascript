import ROUTES from "@/config/routes";
import Link from "next/link"; 

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center dark:bg-black">
      <h1 className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-8xl font-extrabold text-transparent sm:text-9xl">
        404
      </h1>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Page not found
        </h2>
        <p className="max-w-md text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist, was moved, or you don't
          have access to it.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={ROUTES.home}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 font-medium text-white transition hover:bg-indigo-700"
        >
          Go home
        </Link>
        <Link
          href={ROUTES.dashboard}
          className="rounded-lg border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}