import { CalendarDays, MessageSquare, MonitorPlay, Smartphone, Youtube } from 'lucide-react';

const streams = [
  {
    title: 'Canal oficial da SBIB',
    status: 'Em breve',
    description: 'As transmissões da programação online serão publicadas no canal da Semana Brasileira de Informática Biomédica.',
  },
  {
    title: 'Palestras 2026',
    status: 'Em breve',
    description: 'Links de palestras, mesas redondas e minicursos serão liberados conforme a programação oficial.',
  },
  {
    title: 'Atividades presenciais',
    status: 'Híbrido',
    description: 'Acompanhe os comunicados das sedes USP, UFCSPA e UFPR para atividades locais e cobertura do evento.',
  },
];

const StreamingsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--sbib-cream)]">
      <section className="border-b-2 border-black bg-[var(--sbib-blue)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">Programação online</p>
          <h1 className="max-w-4xl text-5xl sm:text-6xl">Transmissões ao vivo</h1>
          <p className="mt-6 max-w-2xl text-black/75">
            A 24ª SBIB terá programação online pelo YouTube, com aproximadamente 30 horas de transmissão durante a semana do evento.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {streams.map((stream) => (
            <article key={stream.title} className="technical-card bg-[var(--sbib-mist)] p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <MonitorPlay className="h-9 w-9 text-black" />
                <span className="border-2 border-black bg-[var(--sbib-sand)] px-3 py-1 text-xs font-black uppercase text-black">
                  {stream.status}
                </span>
              </div>
              <h2 className="mb-4 text-2xl">{stream.title}</h2>
              <p>{stream.description}</p>
              <a
                href="https://www.youtube.com/@SemanaBrasileiradeInformaticaBiomedica"
                target="_blank"
                rel="noopener noreferrer"
                className="sbib-button mt-6 w-full px-4 py-3 text-sm"
              >
                <Youtube size={18} />
                Abrir canal
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: CalendarDays, title: 'Horários', text: 'Consulte o cronograma oficial assim que a organização divulgar a grade completa.' },
            { icon: Smartphone, title: 'Dispositivos', text: 'Assista pelo computador, tablet ou celular conectado à internet.' },
            { icon: MessageSquare, title: 'Interação', text: 'Use o chat da transmissão para perguntas e comentários quando disponível.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-2 border-black bg-[var(--sbib-cream)] p-6">
              <Icon className="mb-4 h-9 w-9 text-[var(--sbib-green)]" />
              <h3 className="mb-3 text-xl">{title}</h3>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StreamingsPage;
