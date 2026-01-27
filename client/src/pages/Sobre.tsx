import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Lightbulb, Users, Award, TrendingUp } from "lucide-react";

/**
 * Página Sobre Nós - Expresso Lupo
 * Página premium com história, missão, visão e valores
 */

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-black">
              NOSSA <span className="text-yellow-400">HISTÓRIA</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Conheça a história por trás da Expresso Lupo e nosso compromisso com excelência
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-black">
                Quem Somos <span className="text-red-600">Nós?</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Expresso Lupo é uma empresa de transportes e logística que nasceu com a missão de revolucionar o mercado de entregas. Começamos pequeno, mas com um grande sonho: oferecer serviços de qualidade, rapidez e segurança que pudessem transformar a forma como as empresas entregam seus produtos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ao longo dos anos, crescemos e nos consolidamos como uma referência no setor, sempre mantendo nossos valores de excelência, confiabilidade e inovação. Hoje, somos parceiros de centenas de empresas que confiam em nós para levar seus produtos aos clientes.
              </p>
              <div className="flex gap-4 pt-4">
                <div>
                  <p className="text-3xl font-black text-red-600">10+</p>
                  <p className="text-gray-600">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-red-600">500+</p>
                  <p className="text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-red-600">50K+</p>
                  <p className="text-gray-600">Entregas Realizadas</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/delivery-service-hero.png"
                alt="Nossa História"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            MISSÃO, VISÃO E <span className="text-yellow-400">VALORES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Missão</h3>
              <p className="text-gray-700">
                Fornecer soluções de transporte e logística que sejam rápidas, seguras e confiáveis, permitindo que nossos clientes foquem no crescimento de seus negócios.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white text-black p-8 rounded-lg border-4 border-yellow-400 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser a empresa de transportes mais confiável e inovadora do Brasil, reconhecida pela excelência, qualidade e compromisso com nossos clientes.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white text-black p-8 rounded-lg border-4 border-red-600 hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4">Valores</h3>
              <p className="text-gray-700">
                Integridade, responsabilidade, inovação e excelência. Esses são os pilares que guiam todas as nossas decisões e ações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-20 md:py-32 bg-yellow-400 text-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            NOSSOS VALORES <span className="text-red-600">FUNDAMENTAIS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Award className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Excelência</h3>
                  <p className="text-gray-800">
                    Buscamos constantemente melhorar nossos processos e serviços para oferecer o melhor aos nossos clientes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Responsabilidade</h3>
                  <p className="text-gray-800">
                    Somos responsáveis por cada entrega, cada cliente e cada promessa que fazemos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Inovação</h3>
                  <p className="text-gray-800">
                    Investimos em tecnologia e novas soluções para oferecer serviços cada vez melhores.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Heart className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Integridade</h3>
                  <p className="text-gray-800">
                    Agimos com honestidade, transparência e ética em todas as nossas relações.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Target className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Foco no Cliente</h3>
                  <p className="text-gray-800">
                    O cliente é o centro de tudo que fazemos. Sua satisfação é nossa prioridade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Lightbulb className="text-red-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-black mb-2">Sustentabilidade</h3>
                  <p className="text-gray-800">
                    Comprometidos com práticas sustentáveis e responsáveis com o meio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            NOSSO <span className="text-red-600">TIME</span>
          </h2>

          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            A Expresso Lupo é formada por profissionais dedicados, experientes e comprometidos com a excelência. Cada membro do nosso time traz expertise e paixão para garantir que cada entrega seja perfeita.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-black text-white p-8 rounded-lg border-4 border-red-600 text-center hover:shadow-2xl transition">
              <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-black mb-2">Logística</h3>
              <p className="text-gray-300">
                Equipe especializada em planejamento e execução de entregas eficientes.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-black text-white p-8 rounded-lg border-4 border-yellow-400 text-center hover:shadow-2xl transition">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award size={48} className="text-black" />
              </div>
              <h3 className="text-xl font-black mb-2">Qualidade</h3>
              <p className="text-gray-300">
                Profissionais dedicados a garantir os mais altos padrões de qualidade.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-black text-white p-8 rounded-lg border-4 border-red-600 text-center hover:shadow-2xl transition">
              <div className="w-24 h-24 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart size={48} />
              </div>
              <h3 className="text-xl font-black mb-2">Atendimento</h3>
              <p className="text-gray-300">
                Equipe atenciosa e sempre pronta para ajudar nossos clientes 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            NOSSA <span className="text-yellow-400">JORNADA</span>
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black">
                  2014
                </div>
                <div className="w-1 h-20 bg-red-600 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-black mb-2">Fundação</h3>
                <p className="text-gray-300">
                  Expresso Lupo é fundada com a missão de revolucionar o mercado de transportes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black">
                  2017
                </div>
                <div className="w-1 h-20 bg-yellow-400 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-black mb-2">Expansão Regional</h3>
                <p className="text-gray-300">
                  Expandimos nossas operações para múltiplas regiões, aumentando nossa cobertura.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black">
                  2020
                </div>
                <div className="w-1 h-20 bg-red-600 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-black mb-2">Inovação Tecnológica</h3>
                <p className="text-gray-300">
                  Implementamos sistema de rastreamento em tempo real e otimizamos processos.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black">
                  2024
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black mb-2">Liderança de Mercado</h3>
                <p className="text-gray-300">
                  Consolidamos nossa posição como referência em transportes e logística no Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-yellow-400 text-black">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Faça Parte da <span className="text-red-600">Nossa Jornada</span>
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Conheça nossos serviços e descubra por que somos a escolha de centenas de empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/servicos">
              <Button className="bg-black hover:bg-gray-800 text-white font-black py-6 px-8 text-lg rounded-lg w-full sm:w-auto">
                Conheça Nossos Serviços
              </Button>
            </a>
            <a href="https://wa.me/553791979463" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white font-black py-6 px-8 text-lg rounded-lg w-full sm:w-auto"
              >
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
