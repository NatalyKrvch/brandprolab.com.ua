'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="uk">
      <body>
        <main className="flex min-h-screen items-center justify-center p-8">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-semibold">
              Вибачте, сайт тимчасово недоступний
            </h1>
            <button
              onClick={reset}
              className="rounded bg-teal-dark px-4 py-2 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-dark focus:ring-offset-2"
            >
              Спробувати ще раз
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
