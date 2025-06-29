'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Clock, CheckCircle2, Users, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Qual a diferença entre tradução juramentada e tradução simples?",
      answer: "A tradução juramentada é feita por um tradutor público certificado e possui validade legal para documentos oficiais. A tradução simples é para fins informativos e acadêmicos, sem valor legal oficial.",
      category: "Tipos de Tradução"
    },
    {
      question: "Quanto tempo demora para receber minha tradução?",
      answer: "O prazo varia conforme o tipo: Tradução simples (1-3 dias), Tradução juramentada (3-5 dias), Apostila de Haia (5-10 dias). Oferecemos também serviço express com entrega em 24h.",
      category: "Prazos"
    },
    {
      question: "A tradução juramentada da Interpretando é aceita em qualquer órgão?",
      answer: "Sim! Nossa tradução juramentada tem validade em todo território nacional e é aceita por universidades, consulados, cartórios, tribunais e demais órgãos oficiais.",
      category: "Validade"
    },
    {
      question: "Posso enviar meu documento por WhatsApp para orçamento?",
      answer: "Absolutamente! Você pode enviar uma foto clara do documento pelo WhatsApp (61) 98133-1104. Analisamos e enviamos o orçamento em até 30 minutos durante horário comercial.",
      category: "Processo"
    },
    {
      question: "O que é Apostila de Haia e quando preciso?",
      answer: "A Apostila de Haia é um certificado que autentica documentos para uso internacional em países signatários da Convenção de Haia. É necessária quando você vai estudar, trabalhar ou morar no exterior.",
      category: "Apostila de Haia"
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos PIX, cartão de crédito/débito, transferência bancária e boleto. O pagamento é feito após aprovação do orçamento e antes do início da tradução.",
      category: "Pagamento"
    },
    {
      question: "Preciso autenticar o documento antes da tradução?",
      answer: "Para tradução juramentada, não é necessário autenticar o documento original. Para apostila de Haia, primeiro fazemos a tradução juramentada e depois solicitamos a apostila.",
      category: "Processo"
    },
    {
      question: "Qual formato recebo a tradução?",
      answer: "A tradução juramentada é entregue impressa com selo e assinatura do tradutor. Tradução simples pode ser entregue em PDF ou formato editável conforme sua necessidade.",
      category: "Entrega"
    },
    {
      question: "Trabalham com outros idiomas além de inglês e espanhol?",
      answer: "Sim! Além de inglês e espanhol, trabalhamos com francês, italiano, alemão, chinês, japonês e outros idiomas. Consulte disponibilidade para seu idioma específico.",
      category: "Idiomas"
    },
    {
      question: "E se eu não estiver satisfeito com a tradução?",
      answer: "Oferecemos garantia de qualidade. Se houver algum problema, revisamos gratuitamente. Nossa taxa de satisfação é de 99,8% entre nossos clientes.",
      category: "Garantia"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const stats = [
    {
      icon: Users,
      number: "15.000+",
      label: "Clientes satisfeitos"
    },
    {
      icon: MessageCircle,
      number: "99.8%",
      label: "Taxa de satisfação"
    },
    {
      icon: Clock,
      number: "30min",
      label: "Tempo médio de resposta"
    },
    {
      icon: CheckCircle2,
      number: "100%",
      label: "Documentos aprovados"
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tire Suas
            <span className="block text-gradient-primary">
              Dúvidas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Respondemos as perguntas mais comuns sobre nossos serviços de tradução
            e apostilamento de documentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* FAQ Content */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index) 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Não encontrou sua resposta?
              </h3>
              <p className="text-slate-300 mb-6">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5561981331104" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:contato@interpretando.com.br"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  E-mail
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">
                Por que confiar na Interpretando?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {(() => {
                        const IconComponent = stat.icon;
                        return <IconComponent className="w-7 h-7 text-white" />;
                      })()}
                    </div>
                    <div className="text-xl font-bold text-slate-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Categorias
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-blue-700">
                      {category}
                    </span>
                    <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded-full">
                      {faqs.filter(faq => faq.category === category).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">
                Precisa de Ajuda Rápida?
              </h3>
              <p className="text-blue-100 mb-6">
                Fale diretamente com nossos especialistas agora mesmo.
              </p>
              <a 
                href="https://wa.me/5561981331104" 
                className="w-full btn-secondary inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 