import { CalendarDays, MessageSquare, MonitorPlay, Smartphone, Youtube } from 'lucide-react';

const streams = [
  {
    title: 'Canal oficial da SBIB',
    status: 'Em breve',
    description: 'As transmissões da programação online serão publicadas no canal da Semana Brasileira de Informática Biomédica.',
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

      <section className="container py-16">
        {/* Card principal ocupando largura total */}
        <div className="w-full">
          {streams.map((stream) => (
            <article key={stream.title} className="technical-card bg-[var(--sbib-mist)] p-6 md:p-10 border-2 border-black">
              <div className="mb-6 flex items-center justify-between gap-4">
                <MonitorPlay className="h-10 w-10 text-black" />
                <span className="border-2 border-black bg-[var(--sbib-sand)] px-4 py-1.5 text-xs font-black uppercase text-black">
                  {stream.status}
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-3xl">
                  <h2 className="mb-4 text-3xl font-bold uppercase">{stream.title}</h2>
                  <p className="text-lg text-black/80">{stream.description}</p>
                </div>
                
                <a
                  href="https://www.youtube.com/@sbib.informaticabiomedica/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border-2 border-black bg-black text-[var(--sbib-cream)] hover:bg-[var(--sbib-sand)] hover:text-black transition-colors px-8 py-4 font-display font-black uppercase shrink-0"
                >
                  <Youtube size={24} />
                  Abrir canal
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Caixas de informações alinhadas abaixo */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { icon: CalendarDays, title: 'Horários', text: 'Consulte o cronograma oficial assim que a organização divulgar a grade completa.' },
            { icon: Smartphone, title: 'Dispositivos', text: 'Assista pelo computador, tablet ou celular conectado à internet.' },
            { icon: MessageSquare, title: 'Interação', text: 'Use o chat da transmissão para perguntas e comentários quando disponível.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-2 border-black bg-[var(--sbib-cream)] p-6 hover:-translate-y-1 transition-transform">
              <Icon className="mb-4 h-9 w-9 text-[var(--sbib-green)]" />
              <h3 className="mb-3 text-xl font-bold uppercase">{title}</h3>
              <p className="text-sm text-black/80">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StreamingsPage;