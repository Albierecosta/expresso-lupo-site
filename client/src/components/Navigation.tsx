import { Link } from "wouter";

/**
 * Componente de Navegação - Expresso Lupo
 * Barra fixa com logo e menu de navegação
 * Sem botão WhatsApp (removido conforme solicitação)
 */

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-red-600">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
                <div className="w-15 h-15 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/images/logo-expresso-lupo.jpeg"
                    alt="Expresso Lupo"
                    className="w-full h-full object-contain"
                  />
                </div>
            <div>
              <h1 className="text-xl font-black text-black">EXPRESSO</h1>
              <p className="text-xs font-bold text-red-600">LUPO</p>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-black hover:text-red-600 font-semibold transition">
              Home
            </a>
          </Link>
          <Link href="/servicos">
            <a className="text-black hover:text-red-600 font-semibold transition">
              Serviços
            </a>
          </Link>
          <Link href="/sobre">
            <a className="text-black hover:text-red-600 font-semibold transition">
              Sobre Nós
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black hover:text-red-600 font-semibold transition">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
