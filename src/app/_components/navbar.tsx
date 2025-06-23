export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 text-blue-900 font-semibold text-lg">
        <a
          href="#assinatura"
          className="hover:text-blue-600 transition-colors"
        >
          Assine
        </a>
        <a
          href="#redes"
          className="hover:text-blue-600 transition-colors"
        >
          Redes sociais
        </a>
        <a
          href="#galeria"
          className="hover:text-blue-600 transition-colors"
        >
          Fotos
        </a>
        <a
          href="#sobre"
          className="hover:text-blue-600 transition-colors"
        >
          Quem somos?
        </a>
      </div>
    </nav>
  );
}
