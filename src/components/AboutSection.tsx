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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="card-hover p-6 md:p-8 text-center">
              <div className={`feature-icon mx-auto mb-4 ${
                stat.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                stat.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                stat.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                'bg-gradient-to-br from-blue-500 to-blue-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="stat-number mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="space-y-32">
          {founders.map((founder, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative mb-16">
                  {/* Main Photo */}
                  <div className="w-96 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Contact Buttons */}
                  <div className="flex justify-center space-x-4 mt-8">
                    <a 
                      href={`mailto:${founder.email}`}
                      className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-transparent hover:border-blue-200"
                      title="E-mail"
                    >
                      <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                    <a 
                      href={`https://${founder.linkedin}`}
                      className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border-2 border-transparent hover:border-blue-200"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {founder.name}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-8 leading-relaxed">
                    {founder.title}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {founder.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Principais Qualificações:
                  </h4>
                  <div className="space-y-4">
                    {founder.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${founder.email}`}
                    className="btn-secondary flex items-center justify-center space-x-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Contato</span>
                  </a>
                  <a
                    href={`https://${founder.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center space-x-3"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="card-lg">
            <div className="max-w-3xl mx-auto">
              <div className="feature-icon mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Políticas da Empresa
              </h3>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Para conhecer melhor as nossas políticas de atendimento e procedimentos, 
                confira nossos termos e condições de serviço.
              </p>
              <button className="btn-primary">
                Ver Políticas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 