import { MapPin, Phone, Mail, Clock, Award, Shield, Users, Globe } from 'lucide-react';

export default function Footer() {
  const offices = [
    {
      city: 'Brasília',
      uf: 'DF',
      address: 'SAUS Quadra 01, Bloco L, Loja 29, Asa Sul',
      phone: '(61) 3034-1042',
      whatsapp: '(61) 98133-1104',
      email: 'brasilia@interpretando.com.br'
    },
    {
      city: 'São Paulo',
      uf: 'SP',
      address: 'Rua Funchal, 573, conjunto 72, Vila Olímpia',
      phone: '(11) 4858-6555',
      whatsapp: '(11) 99999-9999',
      email: 'saopaulo@interpretando.com.br'
    },
    {
      city: 'Belo Horizonte',
      uf: 'MG',
      address: 'Rua Sergipe, 1440, sala 1210, Savassi',
      phone: '(31) 9999-9999',
      whatsapp: '(31) 99999-9999',
      email: 'belohorizonte@interpretando.com.br'
    },
    {
      city: 'Curitiba',
      uf: 'PR',
      address: 'Av. Cândido de Abreu, 526, CJ 1705, Centro Cívico',
      phone: '(41) 9999-9999',
      whatsapp: '(41) 99999-9999',
      email: 'curitiba@interpretando.com.br'
    },
    {
      city: 'Florianópolis',
      uf: 'SC',
      address: 'Av. Osmar Cunha, 183, sala 1507, Centro',
      phone: '(48) 9999-9999',
      whatsapp: '(48) 99999-9999',
      email: 'florianopolis@interpretando.com.br'
    }
  ];

  const badges = [
    { icon: Award, text: 'Tradutores Certificados', desc: 'Matriculados na Junta Comercial' },
    { icon: Shield, text: 'Fé Pública Nacional', desc: 'Validade em todo território nacional' },
    { icon: Users, text: '+10 Anos Experiência', desc: 'Mais de 15.000 documentos traduzidos' },
    { icon: Globe, text: 'Inglês e Espanhol', desc: 'Especialistas em idiomas oficiais' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      {/* Trust Badges */}
      <div className="border-b border-blue-700/50">
        <div className="container-custom py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Por que escolher a Interpretando?
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sua tradução com confiança e qualidade
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Somos especialistas em tradução juramentada com mais de uma década de experiência
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-4 md:mb-6 group-hover:shadow-xl transition-shadow">
                  <badge.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">
                  {badge.text}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offices Grid */}
      <div className="border-b border-blue-700/50">
        <div className="container-custom py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Nossos Escritórios
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estamos em 5 Estados
            </h3>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              Atendimento presencial e online em todo o Brasil
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">
                      {office.city}
                    </h4>
                    <span className="text-blue-600 font-medium text-sm md:text-base">
                      {office.uf}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                      {office.address}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    <a 
                      href={`tel:${office.phone.replace(/\D/g, '')}`}
                      className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 group/link"
                    >
                      <Phone className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      <span className="text-slate-700 group-hover/link:text-slate-900 text-sm md:text-base">
                        {office.phone}
                      </span>
                    </a>

                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group/link"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                      <span className="text-slate-600 group-hover/link:text-slate-800 text-xs md:text-sm">
                        {office.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Hours & Contact */}
      <div className="border-b border-blue-700/50">
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Horário de Atendimento
                </h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Segunda à Sexta</span>
                  <span className="text-slate-900 font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Sábado</span>
                  <span className="text-slate-900 font-semibold">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Domingo</span>
                  <span className="text-blue-600">Fechado</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h5 className="text-slate-900 font-semibold mb-2">Atendimento de Urgência</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Para documentos urgentes, entre em contato via WhatsApp. 
                      Atendemos casos especiais fora do horário comercial.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  Precisa de uma tradução?
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Entre em contato conosco agora mesmo e receba um orçamento gratuito
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+556130341042"
                  className="btn-primary w-full flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>

                <a 
                  href="https://wa.me/5561981331104"
                  className="btn-secondary w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 border-green-600 text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                <a 
                  href="mailto:contato@interpretando.com.br"
                  className="btn-outline w-full flex items-center justify-center space-x-3 text-white border-white/30 hover:bg-white/10"
                >
                  <Mail className="w-5 h-5" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/logo.png" 
              alt="Interpretando" 
              className="h-8 w-auto object-contain opacity-80"
            />
            <div className="text-center md:text-left">
              <p className="text-blue-200">
                © 2024 Interpretando. Todos os direitos reservados.
              </p>
              <p className="text-blue-300 text-sm mt-1">
                Tradução juramentada com fé pública nacional
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-blue-300 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 