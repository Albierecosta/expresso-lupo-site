import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Truck, Package, MapPin, Clock, BarChart3 } from "lucide-react";

/**
 * Página Serviços - Expresso Lupo
 * Página completa e detalhada dos serviços oferecidos
 */

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-black">
              NOSSOS <span className="text-yellow-400">SERVIÇOS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluções completas em transportes e logística para sua empresa crescer
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Service 1 */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-black mb-3">
                    Entregas Rápidas
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Com nossa frota moderna e equipe treinada, garantimos entregas em até 24 horas para a maioria das regiões.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
                <h3 className="font-black text-black mb-4">Características:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Entrega em até 24 horas</span>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Rastreamento em tempo real</span>
                  </li> */}
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Múltiplas regiões atendidas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Equipe profissional</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 1 Image */}
            <div className="relative">
              <img
                src="/images/delivery-service-hero.png"
                alt="Entregas Rápidas"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Service 2 Image */}
            <div className="relative order-2 md:order-1">
              <img
                src="/images/contact-service-icon.png"
                alt="Segurança Total"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-black mb-3">
                    Segurança Total
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Seus produtos estão em boas mãos. Oferecemos embalagem profissional e protocolos de segurança rigorosos para garantir que tudo chegue intacto.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-400">
                <h3 className="font-black text-black mb-4">Características:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Embalagem profissional</span>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Seguro incluído</span>
                  </li> */}
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Protocolos de segurança</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Responsabilidade total</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-black mb-3">
                    Cobertura Ampla
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Atendemos diversas regiões com eficiência e rapidez. Nossa rede de parceiros garante que você alcance seus clientes em qualquer lugar.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
                <h3 className="font-black text-black mb-4">Regiões Atendidas:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Belo Horizonte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Nova Lima</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Contagem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Betim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Juatuba</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Pará de Minas</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Antunes</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Igaratinga</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Florestal</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Nova Serrana</span>
                  </li>                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" size={20} />
                    <span className="text-gray-700">Bom Despacho</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/reliability-pattern.png"
                alt="Cobertura Ampla"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Pronto para <span className="text-yellow-400">Começar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual plano se adequa melhor ao seu negócio.
          </p>
          <a href="https://wa.me/553791979463" target="_blank" rel="noopener noreferrer">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-black py-6 px-8 text-lg rounded-lg">
              Solicitar Orçamento via WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
