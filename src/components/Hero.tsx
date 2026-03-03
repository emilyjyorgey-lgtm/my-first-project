export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-zinc-600">
            Healthmate
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Your AI companion for athletes in career transition.
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
            Turn discipline into direction. Healthmate helps you translate
            performance habits into a plan—skills mapping, routines, and
            confidence-building steps for what’s next.
          </p>
          <div className="mt-8 flex items-center justify-center sm:mt-10">
            <a
              href="#waitlist"
              className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 sm:w-auto"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

