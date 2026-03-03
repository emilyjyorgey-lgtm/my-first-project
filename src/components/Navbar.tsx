export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main"
      >
        <a href="/" className="text-sm font-medium tracking-wide text-zinc-950">
          Healthmate
        </a>
        <a
          href="#signin"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
}
