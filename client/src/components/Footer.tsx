import { MessageCircle, Mail, Phone, Instagram } from "lucide-react";

/**
 * Componente Footer - Expresso Lupo
 * Footer com contato e redes sociais
 */

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-yellow-400">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">EL</span>
              </div>
              <div>
                <h3 className="font-black">EXPRESSO LUPO</h3>
                <p className="text-xs text-yellow-400">Transportes & Entregas</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Sua solução completa em transportes e logística com rapidez e confiabilidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-black mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-red-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/servicos" className="hover:text-red-600 transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-red-600 transition">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-black mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5537991979463"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition"
              >
                <Phone size={18} />
                <span className="text-sm">(37) 99197-9463</span>
              </a>
              <a
                href="https://wa.me/553791979463"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="mailto:contato@expressolupo.com"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition"
              >
                <Mail size={18} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm text-gray-400">
              <p>© 2026 Expresso Lupo. Todos os direitos reservados.</p>
              <p className="text-xs mt-1">
                Desenvolvido por{" "}
                <a
                  href="https://altumsistemas.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Altum Sistemas
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/expressolupoltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/553791979463"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
