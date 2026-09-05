import { Activity, BrainCircuit, Dna, HeartPulse, Scan, Users } from 'lucide-react';

const areas = [
  {
    icon: Dna,
    title: 'Bioinformática',
    text: 'Análise de dados biológicos, como sequências de DNA e proteínas, com técnicas computacionais avançadas.',
  },
  {
    icon: Scan,
    title: 'Imagens médicas',
    text: 'Processamento, análise e interpretação de imagens para apoiar diagnóstico e tratamento de doenças.',
  },
  {
    icon: BrainCircuit,
    title: 'IA em saúde',
    text: 'Aplicação de aprendizado de máquina e redes neurais em diagnóstico, descoberta de medicamentos e pesquisa clínica.',
  },
  {
    icon: HeartPulse,
    title: 'e-Saúde',
    text: 'Sistemas para prontuários eletrônicos, gestão de informações clínicas, agendamentos e serviços digitais.',
  },
  {
    icon: Activity,
    title: 'Biomecânica',
    text: 'Tecnologia aplicada à análise do corpo humano, com simulações, programação e equipamentos especializados.',
  },
];

const About = () => {
  return (
    <section className="bg-[var(--sbib-mist)]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker mb-4">Saiba mais sobre o evento</p>
            <h2 className="text-4xl sm:text-5xl">Sobre a SBIB</h2>
            <div className="technical-rule my-6" />
            <div className="space-y-5">
              <p>
                A Semana Brasileira de Informática Biomédica é um evento tradicional promovido pela Universidade de São Paulo desde 2002. Seu objetivo é integrar estudantes, professores, pesquisadores, empresas e instituições.
              </p>
              <p>
                A partir da 18ª edição, a SBIB passou a contar com a parceria da USP, UFCSPA e UFPR, fortalecendo a integração entre universidades que ofertam o curso de Informática Biomédica.
              </p>
              <p>
                Em 2026, a 24ª edição acontece de 21 a 25 de setembro, em formato híbrido, com programação online e atividades presenciais alternadas entre as universidades.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="technical-card bg-[var(--sbib-cream)] p-6">
              <Users className="mb-5 h-10 w-10 text-[var(--sbib-green)]" />
              <h3 className="mb-3 text-2xl">Público-alvo</h3>
              <p>
                Acadêmicos de Medicina, Biologia, Biotecnologia, Biomedicina, Engenharia Biomédica, Computação, Física Médica, Informática Biomédica e áreas próximas.
              </p>
            </div>
            <div className="technical-card bg-[var(--sbib-blue)] p-6">
              <h3 className="mb-3 text-2xl">Programação</h3>
              <p className="text-black/75">
                Aproximadamente 30 horas de transmissão, 24 palestras, 2 mesas redondas e minicursos, conectando tecnologia, inovação e saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="section-kicker mb-4">Informática Biomédica</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl sm:text-5xl">Áreas de atuação</h2>
            <p className="max-w-xl">
              O curso pesquisa e desenvolve sistemas computacionais aplicados às biociências, à medicina e à gestão em saúde.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {areas.map(({ icon: Icon, title, text }) => (
              <article key={title} className="technical-card bg-[var(--sbib-cream)] p-5">
                <Icon className="mb-5 h-9 w-9 text-black" />
                <h3 className="mb-3 text-xl">{title}</h3>
                <p className="text-sm">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
