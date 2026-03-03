export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        aria-label="Main"
      >
        <a href="/" className="text-sm font-medium tracking-wide text-zinc-950">
          Healthmate
        </a>
        <a
          href="#signin"
          className="-m-2 rounded-md p-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
}
