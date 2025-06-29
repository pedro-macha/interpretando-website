'use client';

import { useState } from 'react';
import { Calculator, Upload, Check, ArrowRight, FileText, Globe, Clock, Star, Users } from 'lucide-react';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    documentType: '',
    urgency: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const serviceOptions = [
    { value: 'juramentada', label: 'Tradução Juramentada', icon: FileText, color: 'blue' },
    { value: 'apostila', label: 'Apostila de Haia', icon: Globe, color: 'purple' },
    { value: 'simples', label: 'Tradução Simples', icon: FileText, color: 'green' }
  ];

  const documentTypes = [
    'Diploma/Certificado',
    'Histórico Escolar',
    'Certidão de Nascimento',
    'Certidão de Casamento',
    'RG/CPF',
    'Carteira de Habilitação',
    'Passaporte',
    'Antecedentes Criminais',
    'Procuração',
    'Contrato',
    'Outro'
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (5-7 dias)', price: 'Padrão' },
    { value: 'express', label: 'Express (2-3 dias)', price: '+30%' },
    { value: 'urgente', label: 'Urgente (24h)', price: '+80%' }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Estudante",
      rating: 5,
      comment: "Excelente atendimento! Minha tradução ficou pronta em 2 dias.",
      avatar: "MS"
    },
    {
      name: "João Santos",
      role: "Empresário",
      rating: 5,
      comment: "Profissionais competentes, processo muito ágil.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      role: "Advogada",
      rating: 5,
      comment: "Qualidade impecável, recomendo para colegas.",
      avatar: "AC"
    }
  ];

  const stats = [
    { icon: Users, value: "15.000+", label: "Clientes atendidos" },
    { icon: FileText, value: "50.000+", label: "Documentos traduzidos" },
    { icon: Star, value: "4.9/5", label: "Avaliação média" },
    { icon: Clock, value: "24h", label: "Entrega expressa" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <section id="orcamento" className="relative py-24 bg-gradient-secondary overflow-hidden">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Orçamento Enviado!
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Recebemos sua solicitação. Nossa equipe entrará em contato em até 30 minutos.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Fazer Novo Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="relative py-24 bg-gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-slate-100">
              {/* Header */}
              <div className="mb-8 md:mb-10">
                <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Calculator className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Orçamento Gratuito
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                  Solicite Seu
                  <span className="block text-gradient-primary">
                    Orçamento
                  </span>
                  Agora Mesmo
                </h2>
                <p className="text-base md:text-lg text-slate-600">
                  Preencha o formulário e receba uma proposta personalizada em até 30 minutos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Tipo de Serviço *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {serviceOptions.map((service) => (
                      <label
                        key={service.value}
                        className="relative cursor-pointer block"
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={service.value}
                          onChange={handleInputChange}
                          className="sr-only peer"
                          required
                        />
                        <div className="p-6 rounded-2xl border-2 border-slate-200 bg-white transition-all duration-300 h-full flex flex-col items-center justify-center min-h-[140px] hover:border-blue-300 hover:shadow-md peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:shadow-lg">
                          <service.icon className={`w-8 h-8 mb-3 ${
                            service.color === 'blue' ? 'text-blue-500' :
                            service.color === 'purple' ? 'text-purple-500' :
                            'text-green-500'
                          }`} />
                          <p className="font-semibold text-center text-slate-900 text-sm leading-tight">
                            {service.label}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Document Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Tipo de Documento *
                    </label>
                    <select
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Selecione o documento</option>
                      {documentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Urgência *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Selecione a urgência</option>
                      {urgencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label} - {option.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Anexar Documento (Opcional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="sr-only"
                      id="file-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
                    >
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-sm text-slate-600">
                        {uploadedFile ? uploadedFile.name : 'Clique para anexar ou arraste aqui'}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        PDF, JPG, PNG (máx. 10MB)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Informações Adicionais
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva detalhes específicos, prazo desejado, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-gradient flex items-center justify-center space-x-3 group"
                >
                  <span>Solicitar Orçamento Gratuito</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Ao enviar este formulário, você concorda com nossa Política de Privacidade.
                  Resposta garantida em até 30 minutos durante horário comercial.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Por que escolher a Interpretando?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                O que nossos clientes dizem
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm italic">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6">
                Prefere falar conosco?
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5561981331104" 
                  className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.685"/>
                  </svg>
                  <span>(61) 98133-1104</span>
                </a>
                <a 
                  href="mailto:contato@interpretando.com.br" 
                  className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@interpretando.com.br</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-slate-300 text-sm">
                  💡 <strong>Dica:</strong> Envie uma foto clara do seu documento pelo WhatsApp para um orçamento mais rápido!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 