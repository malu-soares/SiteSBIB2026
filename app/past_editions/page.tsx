const editions = [
  { year: 2018, link: '/past_editions/2018' },
  { year: 2019, link: '/past_editions/2019' },
  { year: 2020, link: '/past_editions/2020' },
  { year: 2021, link: '/past_editions/2021' },
  { year: 2022, link: '/past_editions/2022' },
  { year: 2023, link: '/past_editions/2023' },
  { year: 2024, link: '/past_editions/2024' },
];

const PastEditionsPage = () => {
  return (
    <main className="min-h-screen bg-[var(--sbib-cream)]">
      <section className="border-b-2 border-black bg-[var(--sbib-mist)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">Arquivo SBIB</p>
          <h1 className="text-5xl sm:text-6xl">Edições anteriores</h1>
          <p className="mt-6 max-w-2xl">
            Relembre banners, registros e playlists das edições anteriores da Semana Brasileira de Informática Biomédica.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {editions.map(({ year, link }) => (
            <a
              key={year}
              href={link}
              className="technical-card flex h-40 items-center justify-center bg-[var(--sbib-blue)] transition-transform hover:-translate-y-1"
              aria-label={`Edição ${year}`}
            >
              <span className="font-display text-5xl font-black text-black">{year}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PastEditionsPage;
