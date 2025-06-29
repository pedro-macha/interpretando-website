import { ArrowRight, CheckCircle, Globe, Award, Star } from 'lucide-react';

export default function HeroSection() {
  const features = [
    "Tradutores certificados JUCESP",
    "Validade nacional garantida", 
    "Entrega em 24-48h",
    "5 escritórios no Brasil"
  ];

  const stats = [
    { number: "15K+", label: "Documentos traduzidos" },
    { number: "10+", label: "Anos de experiência" },
    { number: "5", label: "Estados atendidos" },
    { number: "99%", label: "Satisfação dos clientes" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              Tradução Juramentada Certificada
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Traduções
                <span className="block text-gradient-primary">
                  Juramentadas
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90">
                  com Fé Pública
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                Documentos oficiais traduzidos por profissionais certificados. 
                <strong className="text-white"> Validade garantida </strong>
                em todo território nacional.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-gradient">
                <span className="flex items-center justify-center">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="btn-secondary">
                <span className="flex items-center justify-center">
                  <Globe className="mr-2 w-5 h-5 text-blue-600" />
                  Ver Nossos Serviços
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-200">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="card-hover p-4 md:p-8 transform rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="feature-icon">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">Certificado Oficial</h3>
                    <p className="text-sm md:text-base text-slate-600">JUCESP • JUCERJA • JUCEMG</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center p-3 md:p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-slate-700 text-sm md:text-base">Tempo de Entrega</span>
                    <span className="text-green-600 font-bold text-sm md:text-base">24-48h</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 md:p-4 bg-blue-50 rounded-xl">
                    <span className="font-medium text-slate-700 text-sm md:text-base">Validade</span>
                    <span className="text-blue-600 font-bold text-sm md:text-base">Nacional</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 md:p-4 bg-purple-50 rounded-xl">
                    <span className="font-medium text-slate-700 text-sm md:text-base">Idiomas</span>
                    <span className="text-purple-600 font-bold text-sm md:text-base">EN • ES</span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-1 md:space-x-2 pt-2 md:pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-slate-600 font-medium ml-2 text-xs md:text-base">4.9/5 (2.4k avaliações)</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-12 h-12 md:w-16 md:h-16 bg-yellow-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 