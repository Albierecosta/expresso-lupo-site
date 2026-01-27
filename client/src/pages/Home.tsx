import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Shield, Users, MessageCircle } from "lucide-react";
import { Link } from "wouter";

/**
 * Página Home - Expresso Lupo
 * Design Dinâmico & Energético
 * Cores: Vermelho (#DC143C), Amarelo (#FFD700), Preto (#0A0A0A)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-32 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/reliability-pattern.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Diagonal Cut SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-48"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,100 1200,0 1200,200 0,200" fill="#FFD700" />
        </svg>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-black text-black leading-tight">
                  ENTREGA
                  <br />
                  <span className="text-red-600">RÁPIDA</span>
                  <br />
                  E SEGURA
                </h1>
                <p className="text-lg text-gray-700 font-semibold">
                  Conte com a Expresso Lupo para as entregas do seu negócio. Somos
                  rápidos, confiáveis e sempre prontos para atender.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Linha de cima - Dois botões lado a lado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/servicos">
                    <a>
                      <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 text-lg rounded-lg flex items-center justify-center gap-2 group w-full">
                        Conheça Nossos Serviços
                        <ArrowRight className="group-hover:translate-x-1 transition" />
                      </Button>
                    </a>
                  </Link>

                  <Link href="/sobre">
                    <a>
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-8 text-lg rounded-lg flex items-center justify-center gap-2 group w-full">
                        Conheça Nossa História
                        <ArrowRight className="group-hover:translate-x-1 transition" />
                      </Button>
                    </a>
                  </Link>
                </div>

                {/* Linha de baixo - WhatsApp em destaque */}
                <a
                  href="https://wa.me/553791979463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-black font-bold py-7 px-8 text-lg rounded-lg flex items-center justify-center gap-3 group w-full"
                  >
                    <MessageCircle className="group-hover:scale-110 transition" size={24} />
                    Fale Conosco no WhatsApp
                  </Button>
                </a>
              </div>


              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-gray-200">
                <div>
                  <p className="text-3xl font-black text-red-600">24H</p>
                  <p className="text-sm text-gray-600">Entrega Rápida</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-red-600">100%</p>
                  <p className="text-sm text-gray-600">Segurança</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-red-600">24/7</p>
                  <p className="text-sm text-gray-600">Suporte</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/delivery-service-hero.png"
                  alt="Serviço de Entrega"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Yellow Badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black font-black px-6 py-4 rounded-lg shadow-lg text-center">
                <p className="text-2xl">RÁPIDO</p>
                <p className="text-xs">E CONFIÁVEL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            POR QUE NOS <span className="text-yellow-400">ESCOLHER?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Rapidez</h3>
              <p className="text-gray-700">
                Entrega em até 24 horas com qualidade.
              </p>
            </div>

            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Segurança</h3>
              <p className="text-gray-700">
                Seus produtos estão seguros. Embalagem profissional e seguro incluído.
              </p>
            </div>

            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">Suporte 24/7</h3>
              <p className="text-gray-700">
                Equipe sempre disponível para ajudar. Dúvidas? Estamos aqui!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicos">
              <a>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-6 px-8 text-lg rounded-lg">
                  Explorar Todos os Serviços →
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-yellow-400 text-black">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Pronto para <span className="text-red-600">Entregar</span> com Segurança?
          </h2>
          <p className="text-lg font-semibold mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje e descubra como podemos ajudar seu negócio a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sobre">
              <a>
                <Button className="bg-black hover:bg-gray-800 text-white font-black py-6 px-8 text-lg rounded-lg w-full sm:w-auto">
                  Conheça Nossa História
                </Button>
              </a>
            </Link>
            <a
              href="https://wa.me/553791979463"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-black py-6 px-8 text-lg rounded-lg w-full sm:w-auto"
              >
                Fale Conosco via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
