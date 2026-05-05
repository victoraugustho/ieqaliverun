import Image from "next/image";

const details = [
  { label: "Data", value: "14/06/2026" },
  { label: "Horário", value: "06h30 às 09h00" },
  { label: "Percurso", value: "5 km" },
  { label: "Local", value: "Rua Benjamin Constant, 786 - Centro, Anápolis - GO" },
  { label: "Inscrições até", value: "03/06/2026 às 18h" },
  { label: "Confirmação", value: "2 kg de alimento no dia do evento" },
];

const highlights = [
  "Corrida de rua acessível para iniciantes e corredores experientes",
  "Percurso de 5 km com desafio equilibrado entre resistência e velocidade",
  "Participação confirmada mediante entrega de 2 kg de alimento",
  "Propósito de impactar 400 famílias pelo projeto Mercado do Amor",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-asphalt text-white">
      <section className="relative min-h-[92vh] overflow-hidden px-5 pb-12 pt-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 speed-lines opacity-45" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-asphalt to-transparent" />
        <div className="absolute -right-24 top-20 h-[32rem] w-[32rem] rounded-full border-[5rem] border-acid/20" />
        <div className="absolute -left-40 bottom-10 h-[26rem] w-[26rem] rounded-full border-[4rem] border-gold/20" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5">
          <Image
            src="/assets/logo.jpeg"
            alt="IEQ Anápolis"
            width={120}
            height={120}
            priority
            className="h-16 w-16 rounded-full bg-white object-contain p-2 sm:h-20 sm:w-20"
          />

          <a
            href="https://inchur.ch/lNivj"
            className="group inline-flex min-h-12 items-center justify-center border-2 border-gold bg-gold px-5 py-3 text-xs font-black uppercase text-asphalt transition hover:-translate-y-0.5 hover:bg-acid hover:shadow-race-glow sm:px-7 sm:text-sm"
          >
            Inscrever agora
            <span className="ml-3 transition group-hover:translate-x-1">→</span>
          </a>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[76vh] max-w-7xl items-center gap-10 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pt-8">
          <div>
            <p className="mb-4 inline-flex border border-acid bg-asphalt/75 px-4 py-2 text-xs font-black uppercase text-acid sm:text-sm">
              Corrida oficial de inscrição aberta
            </p>

            <h1 className="race-title max-w-4xl text-[4.4rem] leading-[0.82] text-white sm:text-[7rem] lg:text-[9.5rem]">
              IEQ
              <span className="block text-gold">Alive</span>
              <span className="block text-acid">Run</span>
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="border border-gold bg-gold px-4 py-2 text-sm font-black uppercase text-asphalt">
                14/06/2026
              </span>
              <span className="border border-white/25 bg-white/10 px-4 py-2 text-sm font-black uppercase text-white">
                06h30 às 09h00
              </span>
              <span className="border border-acid bg-acid px-4 py-2 text-sm font-black uppercase text-asphalt">
                5 km
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/86 sm:text-2xl">
              Uma manhã para correr com propósito, celebrar vida e cruzar a
              linha de chegada impactando famílias através do projeto Mercado do Amor.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://inchur.ch/lNivj"
                className="inline-flex min-h-14 items-center justify-center bg-acid px-8 py-4 text-base font-black uppercase text-asphalt transition hover:-translate-y-0.5 hover:bg-gold hover:shadow-race-glow"
              >
                Quero minha vaga
              </a>

              <a
                href="#informacoes"
                className="inline-flex min-h-14 items-center justify-center border border-white/35 px-8 py-4 text-base font-black uppercase text-white transition hover:border-gold hover:text-gold"
              >
                Ver detalhes
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:mr-0">
            <div className="absolute -inset-5 rotate-3 bg-gold" />
            <div className="absolute -inset-2 -rotate-2 bg-acid" />

            <div className="relative bg-white p-5 shadow-race-glow">
              <Image
                src="/assets/alive-logo.jpeg"
                alt="Marca Alive usada como referência visual da corrida"
                width={1024}
                height={620}
                priority
                className="aspect-[4/3] w-full object-contain"
              />
            </div>

            <div className="absolute -bottom-7 left-4 right-4 bg-asphalt px-5 py-4 ring-2 ring-gold">
              <p className="race-title text-4xl leading-none text-gold sm:text-5xl">
                Largue na frente
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="informacoes"
        className="relative border-y border-white/10 bg-[#f6f6ed] px-5 py-14 text-asphalt sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 checkered opacity-60" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase text-asphalt/60">
              Informações oficiais
            </p>

            <h2 className="race-title mt-3 text-5xl leading-none sm:text-7xl">
              Aqueça.
              <span className="block text-[#7f8a09]">Escolha.</span>
              <span className="block">Corra.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {details.map((item) => (
              <div
                key={item.label}
                className="min-h-[130px] border-2 border-asphalt bg-white p-5"
              >
                <p className="text-xs font-black uppercase text-asphalt/55">
                  {item.label}
                </p>

                <p className="race-title mt-3 break-words text-3xl leading-none sm:text-4xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase text-acid">
              Corrida com propósito
            </p>

            <h2 className="race-title mt-3 text-5xl leading-none text-white sm:text-8xl">
              Você corre. Famílias são alcançadas.
            </h2>

            <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-white/75 sm:text-lg">
              Uma corrida de rua de 5 km é acessível, dinâmica e cheia de energia.
              Ideal tanto para iniciantes quanto para corredores experientes.
            </p>
          </div>

          <div className="grid gap-3">
            {highlights.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 border border-white/15 bg-white/[0.04] p-4"
              >
                <span className="race-title flex h-12 w-12 shrink-0 items-center justify-center bg-gold text-3xl text-asphalt">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base font-bold leading-7 text-white/88 sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6ed] px-5 py-16 text-asphalt sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-asphalt/60">
            Endereço
          </p>

          <h2 className="race-title mt-3 text-4xl leading-none sm:text-6xl">
            Rua Benjamin Constant, 786
          </h2>

          <p className="mt-4 max-w-3xl text-lg font-bold leading-8 text-asphalt/75">
            Centro, Anápolis - GO, 75043-010 - Brasil.
          </p>
        </div>
      </section>

      <section className="bg-asphalt px-5 py-14 text-white sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-black uppercase text-acid">
      Acompanhe nas redes sociais
    </p>

    <h2 className="race-title mt-3 text-5xl leading-none sm:text-7xl">
      Fique por dentro da IEQ Alive Run.
    </h2>

    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <a
        href="https://www.instagram.com/aliveanapolis?igsh=c2YwMmJhbDFtaTQx"
        target="_blank"
        rel="noopener noreferrer"
        className="group border border-white/15 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-gold hover:bg-white/[0.08]"
      >
        <p className="text-xs font-black uppercase text-white/50">
          Instagram
        </p>
        <p className="race-title mt-3 text-4xl leading-none text-gold">
          @aliveanapolis
        </p>
        <p className="mt-4 text-sm font-bold uppercase text-white/70 group-hover:text-acid">
          Acessar perfil →
        </p>
      </a>

      <a
        href="https://www.instagram.com/ieqanapolis?igsh=cnh1MTBsb3M1a3Vh"
        target="_blank"
        rel="noopener noreferrer"
        className="group border border-white/15 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-gold hover:bg-white/[0.08]"
      >
        <p className="text-xs font-black uppercase text-white/50">
          Instagram
        </p>
        <p className="race-title mt-3 text-4xl leading-none text-gold">
          @ieqanapolis
        </p>
        <p className="mt-4 text-sm font-bold uppercase text-white/70 group-hover:text-acid">
          Acessar perfil →
        </p>
      </a>
    </div>
  </div>
</section>

      <section className="bg-gold px-5 py-12 text-asphalt sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-black uppercase">Próxima etapa</p>

            <h2 className="race-title text-5xl leading-none sm:text-7xl">
              Garanta sua vaga até 03/06 às 18h.
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="https://inchur.ch/lNivj"
              className="inline-flex min-h-14 items-center justify-center bg-asphalt px-8 py-4 text-base font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#0f1716]"
            >
              Ir para inscrição
            </a>

            <a
              href="/assets/regulamento-oficial.pdf"
              download
              className="inline-flex min-h-14 items-center justify-center border-2 border-asphalt px-8 py-4 text-base font-black uppercase text-asphalt transition hover:-translate-y-0.5 hover:bg-asphalt hover:text-white"
            >
              Baixar regulamento
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
