type EditionPageProps = {
  year: number;
  bannerSrc?: string;
  photoSrc?: string | null;
  committee?: string;
  acknowledgements?: string;
  youtubePlaylist?: string;
};

const EditionPage = ({
  year,
  bannerSrc,
  photoSrc,
  committee,
  acknowledgements,
  youtubePlaylist,
}: EditionPageProps) => {
  return (
    <main className="min-h-screen bg-[var(--sbib-cream)]">
      <section className="border-b-2 border-black bg-[var(--sbib-mist)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">Arquivo SBIB</p>
          <h1 className="text-5xl sm:text-6xl">Edição {year}</h1>
          <p className="mt-6 max-w-2xl">Relembre esta edição da Semana Brasileira de Informática Biomédica.</p>
        </div>
      </section>

      <section className="container">
        <div className="technical-card overflow-hidden bg-[var(--sbib-cream)]">
          {bannerSrc ? (
            <img src={bannerSrc} alt={`Banner da edição ${year}`} className="w-full" />
          ) : (
            <div className="flex h-72 items-center justify-center bg-[var(--sbib-blue)] p-8 text-center font-display text-3xl font-black uppercase text-black">
              Banner da edição {year}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="technical-card bg-[var(--sbib-mist)] p-6">
            <h2 className="mb-4 text-2xl">Comissão organizadora</h2>
            <p>{committee || 'Conteúdo em preparação.'}</p>
          </div>
          <div className="technical-card bg-[var(--sbib-sand)] p-6">
            <h2 className="mb-4 text-2xl">Agradecimentos</h2>
            <p>{acknowledgements || 'Conteúdo em preparação.'}</p>
          </div>
        </div>

        {photoSrc && (
          <div className="technical-card mt-8 overflow-hidden bg-[var(--sbib-cream)]">
            <img src={photoSrc} alt={`Foto da edição ${year}`} className="w-full" />
          </div>
        )}

        {youtubePlaylist && (
          <div className="mt-8 text-center">
            <a href={youtubePlaylist} target="_blank" rel="noopener noreferrer" className="sbib-button px-6 py-3">
              Ver playlist no YouTube
            </a>
          </div>
        )}
      </section>
    </main>
  );
};

export default EditionPage;
