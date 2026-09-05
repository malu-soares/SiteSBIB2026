const products = [
  { title: 'Adesivo SBIB 2026', imageSrc: '/img.products/adesivo.jpg', sizes: ['Único'] },
  { title: 'Broche SBIB 2026', imageSrc: '/img.products/broche.jpeg', sizes: ['Único'] },
  { title: 'Camiseta SBIB 2026', imageSrc: '/img.products/camisa_frente.jpg', sizes: ['P', 'M', 'G', 'GG', 'XG'] },
  { title: 'Cordão SBIB 2026', imageSrc: '/img.products/cordao.jpg', sizes: ['Único'] },
  { title: 'Ecobag SBIB 2026', imageSrc: '/img.products/ecobag.jpg', sizes: ['Único'] },
  { title: 'Garrafa SBIB 2026', imageSrc: '/img.products/garrafa.jpg', sizes: ['Único'] },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-[var(--sbib-cream)]">
      <section className="border-b-2 border-black bg-[var(--sbib-sand)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">Loja oficial</p>
          <h1 className="max-w-4xl text-5xl sm:text-6xl">Produtos oficiais</h1>
          <p className="mt-6 max-w-2xl">
            Produtos da edição 2026 serão anunciados pela organização. A galeria abaixo mantém a estrutura da loja para atualização dos novos itens.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="technical-card flex flex-col bg-[var(--sbib-mist)] p-5">
              <div className="mb-5 h-60 overflow-hidden border-2 border-black bg-[var(--sbib-cream)]">
                <img src={product.imageSrc} alt={product.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 className="text-2xl">{product.title}</h2>
                  <span className="shrink-0 border-2 border-black bg-[var(--sbib-blue)] px-3 py-1 text-xs font-black uppercase text-black">
                    Em breve
                  </span>
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="border border-black px-2 py-1 text-xs font-bold text-black">
                      {size}
                    </span>
                  ))}
                </div>
                <a
                  href="https://lojaoficialsbib.lojavirtualnuvem.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sbib-button secondary mt-auto px-4 py-3 text-sm"
                >
                  Acompanhar loja
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="technical-card mt-14 bg-[var(--sbib-blue)] p-8 text-center">
          <h2 className="text-3xl">Informações de entrega</h2>
          <p className="mx-auto mt-4 max-w-2xl text-black/75">
            Entre em contato com a comissão organizadora da SBIB em sua universidade para informações sobre retirada, entrega e disponibilidade dos produtos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
