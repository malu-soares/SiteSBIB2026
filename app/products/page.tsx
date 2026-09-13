const products = [
  { title: 'Adesivo SBIB 2026', imageSrc: '/img.products/adesivo.jpg', sizes: ['Único'] },
  { title: 'Bloco de Anotação SBIB 2026', imageSrc: '/img.products/bloco.jpg', sizes: ['Único'] },
  { title: 'Bottom SBIB 2026', imageSrc: '/img.products/bottom.jpg', sizes: ['Único'] },
  { title: 'Camiseta SBIB 2026', imageSrc: '/img.products/camisa_frente.jpg', sizes: ['P', 'M', 'G', 'GG', 'XG'] },
  { title: 'Chaveiro SBIB 2026', imageSrc: '/img.products/chaveiro.jpg', sizes: ['Único'] },
  { title: 'Credenciais SBIB 2026', imageSrc: '/img.products/credenciais.jpg', sizes: ['Único'] },
  { title: 'Ecobag SBIB 2026', imageSrc: '/img.products/ecobag.jpg', sizes: ['Único'] },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-[var(--sbib-cream)] pb-16">
      <section className="border-b-2 border-black bg-[var(--sbib-sand)]">
        <div className="container py-16">
          <p className="section-kicker mb-4">Vitrine Oficial</p>
          <h1 className="max-w-4xl text-5xl sm:text-6xl">Produtos da edição</h1>
          <p className="mt-6 max-w-2xl text-lg text-black/80">
            Confira os produtos oficiais da SBIB 2026. Este ano, nossa página funciona como uma vitrine para consulta dos itens disponíveis.
          </p>
        </div>
      </section>

      <section className="container pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="technical-card flex flex-col bg-[var(--sbib-mist)] p-5 border-2 border-black">
              <div className="mb-5 h-60 overflow-hidden border-2 border-black bg-[var(--sbib-cream)]">
                <img src={product.imageSrc} alt={product.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 className="text-2xl font-bold uppercase">{product.title}</h2>
                  <span className="shrink-0 border-2 border-black bg-[var(--sbib-blue)] px-3 py-1 text-xs font-black uppercase text-black">
                    Vitrine
                  </span>
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span key={size} className="border border-black bg-white px-2 py-1 text-xs font-bold text-black">
                      {size}
                    </span>
                  ))}
                </div>
                <a
                  href="#informacoes-compra"
                  className="sbib-button secondary mt-auto flex justify-center px-4 py-3 text-sm transition-colors hover:bg-black hover:text-white"
                >
                  Como adquirir?
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="informacoes-compra" className="technical-card mt-14 border-2 border-black bg-[var(--sbib-blue)] p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-bold uppercase">Como adquirir os produtos?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-black/80">
            Para realizar a compra de qualquer produto desta vitrine, consultar valores ou obter informações sobre os locais de retirada e entrega, <strong>entre em contato diretamente com a comissão organizadora da SBIB na sua universidade</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;