import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

const venuesData = [
  {
    university: 'USP',
    city: 'Ribeirão Preto - SP',
    location: 'Bloco Didático - FMRP',
    logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Webysther_20160310_-_Logo_USP.svg',
    mapLink: 'https://www.google.com/maps/place/Bloco+Did%C3%A1tico+-+FMRP+-+Subsetor+Oeste+-+11+(N-11),+Ribeir%C3%A3o+Preto+-+SP/',
  },
  {
    university: 'UFCSPA',
    city: 'Porto Alegre - RS',
    location: 'Prédio 1 - UFCSPA',
    logoSrc: 'https://simposioensinonasaude.ufcspa.edu.br/apoio/logo-ufcspa.png',
    mapLink: 'https://www.google.com/maps/place/R.+Sarmento+Leite,+245+-+Centro+Hist%C3%B3rico,+Porto+Alegre+-+RS/',
  },
  {
    university: 'UFPR',
    city: 'Curitiba - PR',
    location: 'Departamento de Informática',
    logoSrc: 'https://ufpr.br/wp-content/uploads/2015/11/ufpr_alta.jpg',
    mapLink: 'https://www.google.com/maps/place/Departamento+de+Inform%C3%A1tica+-+UFPR/',
  },
];

const Venues = () => {
  return (
    <section className="bg-[var(--sbib-cream)]">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker mb-4">Universidades</p>
            <h2 className="text-4xl sm:text-5xl">Sedes presenciais</h2>
          </div>
          <p className="max-w-xl">
            A programação presencial será alternada entre USP, UFCSPA e UFPR ao longo da semana, mantendo a integração nacional do curso.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {venuesData.map((venue) => (
            <article key={venue.university} className="technical-card bg-[var(--sbib-mist)] p-6">
              <div className="mb-6 flex h-28 items-center justify-center border-2 border-black bg-[var(--sbib-cream)] p-5">
                <Image
                  src={venue.logoSrc}
                  alt={`Logo da ${venue.university}`}
                  width={170}
                  height={80}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <h3 className="text-3xl">{venue.university}</h3>
              <p className="mt-2 flex items-center gap-2 font-semibold text-[var(--sbib-forest)]">
                <MapPin size={18} />
                {venue.city}
              </p>
              <p className="mt-2 text-sm">{venue.location}</p>
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="sbib-button secondary mt-6 w-full px-4 py-3 text-sm"
              >
                Ver no mapa
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
