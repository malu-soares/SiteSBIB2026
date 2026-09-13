'use client';

import { CalendarDays, Clock, MonitorPlay, University, Users, User } from 'lucide-react';
import { useMemo, useState } from 'react';

type LocationId = 'all'  | 'usp' | 'ufpr';
type EventType = 'palestra' | 'mesa' | 'minicurso' | 'presencial' | 'hackaton' | 'a_definir';

type ScheduleEvent = {
  time: string;
  title: string;
  speaker?: string;
  type: EventType;
  location: Exclude<LocationId, 'all'>;
};

type ScheduleDay = {
  day: string;
  theme: string;
  events: ScheduleEvent[];
};

const schedule: ScheduleDay[] = [
  {
    day: 'Seg 21/09',
    theme: 'Abertura, palestras teóricas e aplicações em saúde',
    events: [
      { time: '08:10 - 09:00', title: 'Bioinformática', speaker: 'Prof. Dr. Thiago Yukio Kikuchi Oliveira', type: 'palestra', location: 'usp' },
      { time: '09:00 - 09:50', title: 'Imagens médicas e informática biomédica: visão de um docente', speaker: 'Prof. Dr. Marcello Henrique Nogueira Barbosa', type: 'palestra', location: 'usp' },
      { time: '10:10 - 11:00', title: 'Da Informática Biomédica à Bioengenharia: construindo a infraestrutura e oportunidades', speaker: 'Profa. Dra. Ana Paula Macedo', type: 'palestra', location: 'usp' },
      { time: '11:00 - 11:50', title: 'I.A aplicada à saúde pública: desafios e oportunidades', speaker: 'Prof. Dr. Domingos Alves', type: 'palestra', location: 'usp' },
      { time: '14:10 - 15:00', title: 'Escores de risco poligênicos para câncer na população brasileira', speaker: 'Profa. Dr. Marina Candido Visontai Cormedi', type: 'palestra', location: 'usp' },
      { time: '15:00 - 15:50', title: 'Imagens Médicas', speaker: 'Yuliana Sofia Lopez Ortiz', type: 'palestra', location: 'usp' },
      { time: '16:10 - 17:00', title: 'Invenção, Inovação e Tecnologias Aplicadas a Saúde', speaker: 'Prof. Dr. Antônio Carlos Shimano', type: 'palestra', location: 'usp' },
      { time: '17:00 - 17:50', title: 'IA e dados como suporte a tomada de decisão em saúde', speaker: 'Prof. Dr. Renato Mantelli Picolli', type: 'palestra', location: 'usp' },
    ],
  },
  {
    day: 'Ter 22/09',
    theme: 'Minicursos e Práticas de Desenvolvimento',
    events: [
      { time: '14:10 - 15:50', title: 'Primeiros passos com Git', speaker: 'Leonardo Lourenço', type: 'minicurso', location: 'usp' },
      { time: '16:10 - 17:50', title: 'Boas Práticas de Computação', speaker: 'Profa. Dra. Alessandra Alaniz Macedo', type: 'minicurso', location: 'usp' },
    ],
  },
  {
    day: 'Qua 23/09',
    theme: 'Atividades Interinstitucionais',
    events: [
    
    ],
  },
  {
    day: 'Qui 24/09',
    theme: 'Inovação Prática e Maratona de Desenvolvimento',
    events: [
      { time: '10:00 - 18:00', title: 'Hackaton', speaker: 'Alliage', type: 'hackaton', location: 'usp' },
    ],
  },
  {
    day: 'Sex 25/09',
    theme: 'Carreira, Relatos de Experiência e Encerramento',
    events: [
      { time: '14:10 - 14:40', title: 'Ergonomia na Programação: estratégias para prevenir dores e lesões', speaker: 'Mirella Cuaglio Sampaio Castelli', type: 'palestra', location: 'usp' },
      { time: '14:40 - 15:10', title: 'Doação de Sangue: Convencer ou Conscientizar?', speaker: 'Sr. José Luiz Belagamba Junior', type: 'palestra', location: 'usp' },
      { time: '15:30 - 16:00', title: 'Intercâmbio durante a graduação', speaker: 'Vinícius de Souza Oliveira e Maria Fernanda Maia', type: 'palestra', location: 'usp' },
      { time: '16:00 - 16:30', title: 'Como a Informática Biomédica me levou ao Agronegócio', speaker: 'Victor Hugo Zani', type: 'palestra', location: 'usp' },
      { time: '16:30 - 17:00', title: 'Biomecânica da articulação coxofemoral em quedas laterais', speaker: 'Maria Eduarda Nakamura', type: 'palestra', location: 'usp' },
      { time: '17:00 - 17:30', title: 'Bioinformática na Pesquisa Biomédica: Caminhos entre a Informática e a Saúde', speaker: 'Anastácia de Souza Freitas', type: 'palestra', location: 'usp' },
    ],
  },
];

const tabs = [
  { id: 'all', label: 'Todos', icon: CalendarDays },
  { id: 'usp', label: 'USP', icon: University },
  { id: 'ufpr', label: 'UFPR', icon: University },
] satisfies { id: LocationId; label: string; icon: React.ElementType }[];

const eventTypes: Record<EventType, { label: string; className: string }> = {
  palestra: { label: 'Palestra', className: 'bg-[var(--sbib-green)] text-black' },
  mesa: { label: 'Mesa redonda', className: 'bg-[var(--sbib-blue)] text-black' },
  minicurso: { label: 'Minicurso', className: 'bg-[var(--sbib-sand)] text-black' },
  hackaton: { label: 'Hackaton', className: 'bg-purple-300 text-black' },
  presencial: { label: 'Presencial', className: 'bg-[var(--sbib-forest)] text-[var(--sbib-cream)]' },
  a_definir: { label: 'A Definir', className: 'bg-gray-300 text-gray-700' },
};

const locationLabels: Record<Exclude<LocationId, 'all'>, string> = {
  usp: 'USP',
  ufpr: 'UFPR',
};

const SchedulePage = () => {
  const [activeTab, setActiveTab] = useState<LocationId>('all');

  const scheduleToDisplay = useMemo(() => {
    if (activeTab === 'all') return schedule;

    return schedule
      .map((day) => ({
        ...day,
        events: day.events.filter((event) => event.location === activeTab),
      }))
      .filter((day) => day.events.length > 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[var(--sbib-cream)]">
      <section className="border-b-2 border-black bg-[var(--sbib-mist)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">21 a 25 de setembro de 2026</p>
          <h1 className="max-w-4xl text-5xl sm:text-6xl">Cronograma do evento</h1>
          <p className="mt-6 max-w-2xl">
            Acompanhe a programação das atividades presenciais da USP e as transmissões das demais sedes participantes.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border-2 border-black px-5 py-3 font-display text-sm font-black uppercase transition ${
                activeTab === tab.id
                  ? 'bg-black text-[var(--sbib-cream)]'
                  : 'bg-[var(--sbib-cream)] text-black hover:bg-[var(--sbib-sand)]'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {scheduleToDisplay.length > 0 ? (
            scheduleToDisplay.map((day) => (
              <article key={day.day} className="technical-card bg-[var(--sbib-mist)] p-6 border-2 border-black">
                <div className="mb-6 flex flex-col justify-between gap-3 border-b-2 border-black pb-5 md:flex-row md:items-end">
                  <div>
                    <h2 className="text-3xl font-bold">{day.day}</h2>
                    <p className="mt-2 font-semibold text-[var(--sbib-forest)]">{day.theme}</p>
                  </div>
                  <div className="technical-rule" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {day.events.map((event, index) => (
                    <div key={`${day.day}-${index}`} className="border-2 border-black bg-[var(--sbib-cream)] p-5 flex flex-col justify-between">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                          <span className={`px-3 py-1 text-xs font-black uppercase ${eventTypes[event.type].className}`}>
                            {eventTypes[event.type].label}
                          </span>
                          <span className="text-xs font-black uppercase text-[var(--sbib-forest)]">
                            {locationLabels[event.location]}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                        {event.speaker && (
                          <p className="mb-4 flex items-center gap-2 text-sm text-gray-800">
                            <User size={16} className="shrink-0" />
                            <span>{event.speaker}</span>
                          </p>
                        )}
                      </div>
                      <p className="flex items-center gap-2 text-sm font-semibold mt-2 border-t border-black/10 pt-3">
                        <Clock size={16} />
                        {event.time}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="technical-card bg-[var(--sbib-cream)] p-10 text-center border-2 border-black">
              <Users className="mx-auto mb-4 h-12 w-12 text-[var(--sbib-green)]" />
              <h2 className="text-3xl font-bold">Nenhuma atividade nesta localidade</h2>
              <p className="mt-3">Tente visualizar todos os dias ou aguarde o lançamento oficial da programação das sedes parceiras.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;