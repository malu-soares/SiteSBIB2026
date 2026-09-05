import Link from 'next/link';

const Schedule = () => {
  return (
    <section className="bg-[var(--sbib-sand)]">
      <div className="container text-center">
        <p className="section-kicker mb-4 justify-center">Programação 2026</p>
        <h2 className="text-4xl sm:text-5xl">21 a 25 de setembro</h2>
        <p className="mx-auto mt-5 max-w-2xl">
          A 24ª edição terá aproximadamente 30 horas de transmissão, palestras, mesas redondas, minicursos e atividades presenciais nas sedes participantes.
        </p>
        <Link href="/cronograma" className="sbib-button mt-8 px-6 py-3">
          Ver cronograma
        </Link>
      </div>
    </section>
  );
};

export default Schedule;
