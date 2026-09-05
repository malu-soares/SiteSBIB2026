'use client';

import { CalendarDays, Clock, MonitorPlay, University, Users } from 'lucide-react';
import { useMemo, useState } from 'react';

type LocationId = 'all' | 'online' | 'usp' | 'ufcspa' | 'ufpr';
type EventType = 'palestra' | 'mesa' | 'minicurso' | 'presencial';

type ScheduleEvent = {
  time: string;
  title: string;
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
    theme: 'Abertura e integração',
    events: [
      { time: 'Manhã', title: 'Atividades presenciais nas universidades', type: 'presencial', location: 'usp' },
      { time: 'Tarde', title: 'Abertura oficial da 24ª SBIB', type: 'palestra', location: 'online' },
    ],
  },
  {
    day: 'Ter 22/09',
    theme: 'Tecnologia, inovação e saúde',
    events: [
      { time: 'Manhã', title: 'Minicursos e atividades locais', type: 'minicurso', location: 'ufcspa' },
      { time: 'Tarde', title: 'Palestras online da programação principal', type: 'palestra', location: 'online' },
    ],
  },
  {
    day: 'Qua 23/09',
    theme: 'Informática Biomédica em pesquisa',
    events: [
      { time: 'Manhã', title: 'Atividades presenciais alternadas', type: 'presencial', location: 'ufpr' },
      { time: 'Tarde', title: 'Mesa redonda com convidados', type: 'mesa', location: 'online' },
    ],
  },
  {
    day: 'Qui 24/09',
    theme: 'Áreas de atuação',
    events: [
      { time: 'Manhã', title: 'Minicursos práticos', type: 'minicurso', location: 'usp' },
      { time: 'Tarde', title: 'Palestras sobre IA, imagens médicas, bioinformática e e-saúde', type: 'palestra', location: 'online' },
    ],
  },
  {
    day: 'Sex 25/09',
    theme: 'Encerramento',
    events: [
      { time: 'Manhã', title: 'Atividades finais nas sedes', type: 'presencial', location: 'ufcspa' },
      { time: 'Tarde', title: 'Mesa redonda e encerramento da 24ª SBIB', type: 'mesa', location: 'online' },
    ],
  },
];

const tabs = [
  { id: 'all', label: 'Todos', icon: CalendarDays },
  { id: 'online', label: 'Online', icon: MonitorPlay },
  { id: 'usp', label: 'USP', icon: University },
  { id: 'ufcspa', label: 'UFCSPA', icon: University },
  { id: 'ufpr', label: 'UFPR', icon: University },
] satisfies { id: LocationId; label: string; icon: React.ElementType }[];

const eventTypes = {
  palestra: { label: 'Palestra', className: 'bg-[var(--sbib-green)]' },
  mesa: { label: 'Mesa redonda', className: 'bg-[var(--sbib-blue)]' },
  minicurso: { label: 'Minicurso', className: 'bg-[var(--sbib-sand)]' },
  presencial: { label: 'Presencial', className: 'bg-[var(--sbib-forest)] text-[var(--sbib-cream)]' },
};

const locationLabels = {
  online: 'Online',
  usp: 'USP',
  ufcspa: 'UFCSPA',
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
            A programação oficial será publicada pela organização. Esta prévia segue o formato informado no guia: atividades online e encontros presenciais alternados entre as universidades.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="mb-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border-2 border-black px-5 py-3 font-display text-sm font-black uppercase transition ${
                activeTab === tab.id ? 'bg-black text-[var(--sbib-cream)]' : 'bg-[var(--sbib-cream)] text-black hover:bg-[var(--sbib-sand)]'
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
              <article key={day.day} className="technical-card bg-[var(--sbib-mist)] p-6">
                <div className="mb-6 flex flex-col justify-between gap-3 border-b-2 border-black pb-5 md:flex-row md:items-end">
                  <div>
                    <h2 className="text-3xl">{day.day}</h2>
                    <p className="mt-2 font-semibold text-[var(--sbib-forest)]">{day.theme}</p>
                  </div>
                  <div className="technical-rule" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {day.events.map((event) => (
                    <div key={`${day.day}-${event.title}`} className="border-2 border-black bg-[var(--sbib-cream)] p-5">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <span className={`px-3 py-1 text-xs font-black uppercase text-black ${eventTypes[event.type].className}`}>
                          {eventTypes[event.type].label}
                        </span>
                        <span className="text-xs font-black uppercase text-[var(--sbib-forest)]">{locationLabels[event.location]}</span>
                      </div>
                      <h3 className="mb-3 text-xl">{event.title}</h3>
                      <p className="flex items-center gap-2 text-sm font-semibold">
                        <Clock size={16} />
                        {event.time}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="technical-card bg-[var(--sbib-cream)] p-10 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-[var(--sbib-green)]" />
              <h2 className="text-3xl">Nenhuma atividade nesta localidade</h2>
              <p className="mt-3">Tente visualizar todos os dias ou aguarde a programação oficial.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
