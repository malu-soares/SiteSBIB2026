'use client';

import { PartyPopper } from 'lucide-react';
import { useEffect, useState } from 'react';

type TimeLeft = {
  Dias: number;
  Horas: number;
  Minutos: number;
  Segundos: number;
};

type EventStatus = 'upcoming' | 'live' | 'ended';

const eventStartDate = new Date('2026-09-21T08:00:00-03:00');
const eventEndDate = new Date('2026-09-25T18:00:00-03:00');

const getEventStatus = (): EventStatus => {
  const now = Date.now();
  if (now > +eventEndDate) return 'ended';
  if (now >= +eventStartDate) return 'live';
  return 'upcoming';
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = +eventStartDate - Date.now();
  if (difference <= 0) {
    return { Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 };
  }

  return {
    Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    Minutos: Math.floor((difference / 1000 / 60) % 60),
    Segundos: Math.floor((difference / 1000) % 60),
  };
};

const TimeCard = ({ value, label }: { value: number; label: string }) => (
  // Alterado: px-1 py-2 para garantir margem horizontal menor e flex para alinhar perfeitamente
  <div className="flex min-w-0 flex-col items-center justify-center border-2 border-black bg-[var(--sbib-cream)] px-1 py-2 sm:p-2 text-center shadow-[4px_4px_0_rgba(67,94,78,0.25)]">
    <span className="block font-display text-2xl font-black text-black sm:text-3xl xl:text-4xl">
      {String(value).padStart(2, '0')}
    </span>
    {/* Alterado: font size reduzido para text-[9px] em mobile, com tracking-tighter para encolher a largura da palavra */}
    <span className="mt-1 block text-[9px] sm:text-[10px] xl:text-[11px] font-black uppercase tracking-tighter text-[var(--sbib-forest)]">
      {label}
    </span>
  </div>
);

const Countdown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ Dias: 0, Horas: 0, Minutos: 0, Segundos: 0 });
  const [eventStatus, setEventStatus] = useState<EventStatus>('upcoming');

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    setEventStatus(getEventStatus());
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (eventStatus !== 'upcoming') return;

    const timer = window.setInterval(() => {
      const currentStatus = getEventStatus();
      setEventStatus(currentStatus);
      setTimeLeft(calculateTimeLeft());
      if (currentStatus !== 'upcoming') {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [eventStatus, isMounted]);

  if (eventStatus === 'ended') {
    return (
      <div className="flex items-center gap-3 text-black">
        <PartyPopper size={30} />
        <div>
          <h3 className="text-2xl font-bold uppercase">Evento encerrado</h3>
          <p className="text-sm">Obrigado por participar da 24ª SBIB.</p>
        </div>
      </div>
    );
  }

  if (eventStatus === 'live') {
    return (
      <div>
        <h3 className="text-3xl font-bold uppercase text-[var(--sbib-green)]">O evento começou</h3>
        <p className="mt-2 text-sm">Acompanhe a programação oficial e as transmissões ao vivo.</p>
      </div>
    );
  }

  return (
    // Reduzido o gap de 3 para 2 em dispositivos móveis para ceder mais espaço aos cards
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimeCard key={label} value={value} label={label} />
      ))}
    </div>
  );
};

export default Countdown;