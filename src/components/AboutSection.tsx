import { User, Award, GraduationCap, MapPin, Linkedin, Users, Target, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const founders = [
    {
      name: 'Florisvaldo Machado',
      title: 'Tradutor Público Juramentado e Intérprete Comercial',
      image: '/images/florisvaldo.png',
      description: 'Tradutor e intérprete, graduado em Letras – Tradução – Inglês pela Universidade de Brasília e com Diploma Superior de Espanhol como Língua Estrangeira, outorgado pelo Ministério da Educação, Cultura e Esporte da Espanha.',
      achievements: [
        'Nomeado Tradutor Público em maio de 2009 (Espanhol ↔ Português)',
        'Primeira colocação no concurso da Junta Comercial de Minas Gerais',
        'Aprovado em concurso para Tradutor Juramentado do idioma inglês em 2012',
        'Experiência desde 1990 em interpretação e tradução'
      ],
      email: 'florisvaldo@interpretando.com.br',
      linkedin: 'linkedin.com/in/florisvaldomachado/'
    },
    {
      name: 'Klébert Machado',
      title: 'Tradutor Público Juramentado e Intérprete Comercial',
      image: '/images/klebert.png',
      description: 'Tradutor juramentado e intérprete comercial com dupla habilitação em inglês e espanhol, por concurso público. Também é advogado inscrito na Ordem dos Advogados do Brasil.',
      achievements: [
        'Dupla habilitação em inglês e espanhol por concurso público',
        'Advogado especialista em Direito Internacional Privado',
        'Mestrado pela UnB e estudos no Canadá (University of Alberta)',
        'Diploma Superior de Espanhol (DELE) e credencial PMP'
      ],
      email: 'klebert@interpretando.com.br',
      linkedin: 'linkedin.com/in/klebert-machado-9796221b0'
    }
  ];

  const stats = [
    { icon: Award, number: "13+", label: "Anos de experiência", color: "blue" },
    { icon: User, number: "2", label: "Sócios tradutores", color: "green" },
    { icon: MapPin, number: "5", label: "Escritórios no Brasil", color: "purple" },
    { icon: GraduationCap, number: "100%", label: "Validade nacional", color: "orange" }
  ];

  return (
    <section id="sobre" className="section-padding gradient-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Nossa História
          </div>
          <h2 className="text-gray-900 mb-8">
            Sobre Nós
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              A Interpretando surgiu em 2011, fruto da expansão natural da base de 
              clientes atendidos individualmente pelos sócios, Florisvaldo e Klébert Machado. 
              Juntos, reúnem décadas de experiência profissional em tradução e interpretação 
              nos idiomas inglês e espanhol.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No escritório, adotaram rigorosas rotinas de atendimento e de controle de 
              qualidade na busca por um trabalho de excelência para clientes de pequeno, 
              médio e grande porte de todo o país.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="card-hover p-4 md:p-6 lg:p-8 text-center">
              <div className={`feature-icon mx-auto mb-3 md:mb-4 ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                stat.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                'bg-gradient-to-br from-blue-500 to-blue-600'
              }`}>
                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="stat-number mb-1 md:mb-2 text-xl md:text-2xl">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {founders.map((founder, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative mb-8 md:mb-12 lg:mb-16">
                  {/* Main Photo */}
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contact Buttons */}
                  <div className="flex justify-center space-x-3 md:space-x-4 mt-6 md:mt-8">
                    <a 
                      href={`mailto:${founder.email}`}
                      className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-transparent hover:border-blue-200"
                      title="E-mail"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://${founder.linkedin}`}
                      className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-transparent hover:border-blue-200"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 md:space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                    {founder.name}
                  </h3>
                  <p className="text-lg md:text-xl text-blue-600 font-semibold mb-6 md:mb-8 leading-relaxed">
                    {founder.title}
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Principais Qualificações:
                  </h4>
                  <div className="space-y-3 md:space-y-4">
                    {founder.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border border-gray-200 shadow-sm">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href={`mailto:${founder.email}`}
                    className="btn-secondary flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Contato</span>
                  </a>
                  <a
                    href={`https://${founder.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-base"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center">
          <div className="card-lg">
            <div className="max-w-3xl mx-auto">
              <div className="feature-icon mx-auto mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Políticas da Empresa
              </h3>
              <p className="text-gray-600 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
                Para conhecer melhor as nossas políticas de atendimento e procedimentos, 
                confira nossos termos e condições de serviço.
              </p>
              <button className="btn-primary text-sm md:text-base">
                Ver Políticas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 