'use client';

import { useState } from 'react';
import { 
  FileText, 
  Globe, 
  Building2, 
  Clock, 
  Shield, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Users,
  Star,
  Target,
  BookOpen
} from 'lucide-react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'juramentada',
      title: 'Tradução Juramentada',
      subtitle: 'Oficialmente reconhecida',
      description: 'Tradução com validade legal para documentos oficiais, com selo e assinatura do tradutor público.',
      icon: FileText,
      color: 'blue',
      features: [
        'Validade legal garantida',
        'Reconhecimento oficial',
        'Selo do tradutor público',
        'Aceita em órgãos públicos',
        'Prazo de 3-5 dias úteis'
      ],
      documents: [
        'Diplomas e certificados',
        'Históricos escolares',
        'Certidões (nascimento, casamento)',
        'Documentos de identidade',
        'Antecedentes criminais'
      ],
      process: [
        'Envio do documento',
        'Análise e orçamento',
        'Tradução certificada',
        'Entrega com selo oficial'
      ]
    },
    {
      id: 'apostila',
      title: 'Apostila de Haia',
      subtitle: 'Reconhecimento internacional',
      description: 'Processo que autentica documentos para uso em países signatários da Convenção de Haia.',
      icon: Globe,
      color: 'purple',
      features: [
        'Válido em 118+ países',
        'Processo simplificado',
        'Reconhecimento automático',
        'Sem necessidade de legalização',
        'Prazo de 5-10 dias úteis'
      ],
      documents: [
        'Diplomas traduzidos',
        'Certidões traduzidas',
        'Documentos empresariais',
        'Procurações',
        'Contratos internacionais'
      ],
      process: [
        'Tradução juramentada',
        'Solicitação no CNJ',
        'Verificação oficial',
        'Emissão da apostila'
      ]
    },
    {
      id: 'simples',
      title: 'Tradução Simples',
      subtitle: 'Para uso acadêmico e comercial',
      description: 'Tradução técnica e precisa para documentos que não exigem certificação oficial.',
      icon: BookOpen,
      color: 'green',
      features: [
        'Qualidade profissional',
        'Entrega rápida',
        'Revisão incluída',
        'Formato editável',
        'Prazo de 1-3 dias úteis'
      ],
      documents: [
        'Manuais técnicos',
        'Artigos acadêmicos',
        'Apresentações',
        'Websites e apps',
        'Material publicitário'
      ],
      process: [
        'Análise do conteúdo',
        'Tradução profissional',
        'Revisão técnica',
        'Entrega em formato desejado'
      ]
    }
  ];

  const metrics = [
    { number: '15.000+', label: 'Clientes Atendidos', icon: Users },
    { number: '50.000+', label: 'Documentos Traduzidos', icon: FileText },
    { number: '4.9/5', label: 'Avaliação Média', icon: Star },
    { number: '98%', label: 'Taxa de Aprovação', icon: Target }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Tradutores Certificados',
      description: 'Profissionais habilitados e registrados na Junta Comercial.'
    },
    {
      icon: Clock,
      title: 'Entrega Garantida',
      description: 'Cumprimos 100% dos prazos acordados com nossos clientes.'
    },
    {
      icon: Award,
      title: 'Qualidade Comprovada',
      description: 'Mais de 15 anos de experiência e milhares de clientes satisfeitos.'
    },
    {
      icon: Building2,
      title: 'Suporte Especializado',
      description: 'Atendimento técnico para esclarecer todas as suas dúvidas.'
    }
  ];

  return (
    <section id="servicos" className="relative py-24 bg-gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Soluções Completas em
            <span className="block text-gradient-primary">
              Tradução
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Oferecemos todos os tipos de tradução que você precisa, com qualidade profissional 
            e reconhecimento oficial em todo o território nacional.
          </p>
        </div>

        {/* Services Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-white text-blue-600 shadow-lg border-2 border-blue-200'
                    : 'bg-white/50 text-white hover:bg-white hover:text-slate-700 hover:shadow-md border-2 border-transparent'
                }`}
              >
                {(() => {
                  const IconComponent = service.icon;
                  return <IconComponent className="w-5 h-5" />;
                })()}
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-7">
                <div className="flex items-start space-x-4 mb-8">
                  <div className={`p-4 rounded-2xl ${
                    services[activeService].color === 'blue' ? 'bg-blue-100' :
                    services[activeService].color === 'purple' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    {(() => {
                      const IconComponent = services[activeService].icon;
                      return (
                        <IconComponent className={`w-8 h-8 ${
                          services[activeService].color === 'blue' ? 'text-blue-600' :
                          services[activeService].color === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }`} />
                      );
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-4">
                      {services[activeService].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    O que está incluído:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-gradient inline-flex items-center space-x-3 group">
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-5 space-y-8">
                {/* Documents */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">
                    Documentos mais comuns:
                  </h4>
                  <ul className="space-y-2">
                    {services[activeService].documents.map((doc, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">
                    Como funciona:
                  </h4>
                  <div className="space-y-4">
                    {services[activeService].process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-16 md:mb-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-slate-100">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8 md:mb-12">
              Números que Comprovam Nossa Excelência
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {(() => {
                      const IconComponent = metric.icon;
                      return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />;
                    })()}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 block">
                    {metric.number}
                  </div>
                  <div className="text-slate-600 text-sm md:text-base">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16">
            Por que escolher a
            <span className="block text-gradient-primary">
              Interpretando?
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-blue-200 transition-colors">
                  {(() => {
                    const IconComponent = item.icon;
                    return <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />;
                  })()}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 