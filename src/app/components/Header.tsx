const logoContabeis = new URL('../assets/logo-contabeis.png', import.meta.url).href;

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Matriz', href: '#matriz' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 px-3 backdrop-blur-xl sm:px-4 lg:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3">
        <a href="#inicio" className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
          <img
            src={logoContabeis}
            alt="Ciências Contábeis AMF"
            className="h-8 w-auto shrink-0 sm:h-10"
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-bold sm:text-base">Ciências Contábeis</p>
            <p className="text-xs text-gray-400">AMF</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#matriz"
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-pink-500/50 hover:text-white md:hidden"
        >
          Matriz
        </a>
      </div>
    </header>
  );
}
