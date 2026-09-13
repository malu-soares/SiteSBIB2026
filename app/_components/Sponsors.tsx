import { Handshake, Plus } from 'lucide-react';
import Image from 'next/image';

const sponsors = [
  { name: 'USPapel', src: '/logos/uspapel-canva.png', href: 'https://www.uspapelartigos.com/' },
];

const Sponsors = () => {
  return (
    <section className="bg-[var(--sbib-blue)]">
      <div className="container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-4">Patrocínio</p>
            <h2 className="text-4xl sm:text-5xl">Patrocínios e apoios</h2>
          </div>
          <div className="technical-card bg-[var(--sbib-cream)] p-6">
            <div className="flex items-start gap-4">
              <Handshake className="mt-1 h-8 w-8 shrink-0 text-[var(--sbib-green)]" />
              <p>
                Empresas interessadas em oferecer produtos, cursos ou benefícios podem colaborar em um plano especial avaliado pela organização.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="technical-card flex h-44 items-center justify-center bg-[var(--sbib-cream)] p-7 transition-transform hover:-translate-y-1"
              aria-label={`Acessar site de ${sponsor.name}`}
            >
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={220}
                height={120}
                className="max-h-24 w-auto object-contain"
              />
            </a>
          ))}
          <div className="technical-card flex h-44 flex-col items-center justify-center bg-[var(--sbib-sand)] p-7 text-center">
            <Plus className="mb-3 h-8 w-8 text-black" />
            <h3 className="text-xl">Sua marca aqui</h3>
            <p className="mt-2 text-sm">contato.sbib@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
