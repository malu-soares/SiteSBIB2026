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
  <div className="min-w-0 border-2 border-black bg-[var(--sbib-cream)] p-3 text-center shadow-[5px_5px_0_rgba(67,94,78,0.25)]">
    <span className="block font-display text-3xl font-black text-black sm:text-4xl">
      {String(value).padStart(2, '0')}
    </span>
    <span className="mt-1 block text-[0.68rem] font-black uppercase text-[var(--sbib-forest)]">{label}</span>
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
          <h3 className="text-2xl">Evento encerrado</h3>
          <p className="text-sm">Obrigado por participar da 24ª SBIB.</p>
        </div>
      </div>
    );
  }

  if (eventStatus === 'live') {
    return (
      <div>
        <h3 className="text-3xl text-[var(--sbib-green)]">O evento começou</h3>
        <p className="mt-2 text-sm">Acompanhe a programação oficial e as transmissões ao vivo.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimeCard key={label} value={value} label={label} />
      ))}
    </div>
  );
};

export default Countdown;
