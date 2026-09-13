import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import Countdown from './Countdown';

const registrationUrl = 'https://www.sympla.com.br/evento/xxiv-semana-brasileira-de-informatica-biomedica-usp/3569138';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--sbib-cream)]">
      <div className="absolute inset-y-0 right-0 hidden w-[28vw] bg-[var(--sbib-blue)] lg:block" />
      <div className="dot-field absolute bottom-10 left-6 h-44 w-44 text-[var(--sbib-sage)] opacity-35" />
      <div className="absolute -right-16 bottom-10 hidden h-72 w-72 rounded-full border-[18px] border-[var(--sbib-forest)]/10 lg:block" />
      <div className="container relative grid min-h-[calc(100vh-74px)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-7 flex items-center gap-4">
            <span className="brand-logo text-black">SBIB</span>
            <div className="technical-rule" />
          </div>

          <p className="section-kicker mb-4">USP - UFPR</p>
          <h1 className="max-w-4xl text-[clamp(2.65rem,7vw,6.8rem)]">
            24ª Semana Brasileira de Informática Biomédica
          </h1>

          <div className="mt-7 grid gap-3 text-base font-semibold text-[var(--sbib-forest)] sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <CalendarDays size={22} />
              <span>USP: 21 a 25 de setembro de 2026 - UFPR: 14 a 18 de setembro de 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={22} />
              <span>Formato híbrido</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="sbib-button px-6 py-3">
              Garanta sua vaga
              <ArrowRight size={18} />
            </a>
            <a href="/cronograma" className="sbib-button secondary px-6 py-3">
              Ver cronograma
            </a>
          </div>
        </div>

        <aside className="corner-lines text-[var(--sbib-forest)]">
          <div className="technical-card bg-[var(--sbib-mist)] p-6 sm:p-8">
            <div className="mb-6 flex justify-between gap-4">
              <span className="font-display text-sm font-black uppercase text-black">Plano 2026</span>
              <span className="font-display text-sm font-black uppercase text-black">Híbrido</span>
            </div>
            <h2 className="mb-5 text-3xl sm:text-4xl">Contagem regressiva</h2>
            <Countdown />
            <p className="mt-7 border-t-2 border-[var(--sbib-forest)] pt-5 text-sm font-medium text-[var(--sbib-forest)]">
              Programação online pelo canal da Semana Brasileira de Informática Biomédica e atividades presenciais alternadas entre as universidades participantes.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
