export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-zinc-600">
            Healthmate
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Your AI companion for athletes in career transition.
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-zinc-600">
            Turn discipline into direction. Healthmate helps you translate
            performance habits into a plan—skills mapping, routines, and
            confidence-building steps for what’s next.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

