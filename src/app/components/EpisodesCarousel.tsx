import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const carouselImages = {
  accountingGame: new URL('../assets/accounting game.jpg', import.meta.url).href,
  podcast: new URL('../assets/PODCAST.jpeg', import.meta.url).href,
  atletica: new URL('../assets/ATLETICA.jpg', import.meta.url).href,
  palestra: new URL('../assets/PALESTRA.png', import.meta.url).href,
  amfGames: new URL('../assets/Confira os registros do AMF Games que aconteceu no último sábado!🥈⚽️🤩 (1).jpg', import.meta.url).href,
};

const episodes = [
  {
    id: 1,
    title: 'Accounting Game',
    guest: 'Arena Contábil',
    description: 'Desafio prático para aplicar contabilidade, análise e tomada de decisão',
    image: carouselImages.accountingGame,
    position: 'center',
  },
  {
    id: 2,
    title: 'Podcast',
    guest: 'Lucrativamente',
    description: 'Conversas sobre contabilidade, finanças, carreira e mercado',
    image: carouselImages.podcast,
    position: 'center',
  },
  {
    id: 3,
    title: 'Atlética',
    guest: 'Contábeis AMF',
    description: 'Integração entre alunos, esporte e vida universitária',
    image: carouselImages.atletica,
    position: 'center',
  },
  {
    id: 4,
    title: 'Palestras',
    guest: 'Semana Acadêmica',
    description: 'Encontros com profissionais e temas atuais da área contábil',
    image: carouselImages.palestra,
    position: 'center',
  },
  {
    id: 5,
    title: 'AMF Games',
    guest: 'Vivência universitária',
    description: 'Participação em eventos que fortalecem comunidade e pertencimento',
    image: carouselImages.amfGames,
    position: 'center',
  },
];

export function EpisodesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>('[data-carousel-card]');
    const cardWidth = firstCard?.offsetWidth ?? carousel.clientWidth;
    const gap = 16;

    carousel.scrollBy({
      left: direction === 'next' ? cardWidth + gap : -(cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section id="experiencias" className="relative overflow-hidden scroll-mt-20 px-4 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 grid gap-5 text-center sm:mb-10 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end lg:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Vivências do Curso
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl lg:mx-0">
              Projetos, eventos e atividades que aproximam o aluno da prática e da vida acadêmica
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 lg:justify-end">
            <button
              type="button"
              aria-label="Ver experiência anterior"
              onClick={() => scrollCarousel('previous')}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:border-pink-500/50 hover:bg-pink-500/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Ver próxima experiência"
              onClick={() => scrollCarousel('next')}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:border-pink-500/50 hover:bg-pink-500/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={carouselRef}
          className="carousel-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0"
        >
          {episodes.map((episode) => (
            <article
              key={episode.id}
              data-carousel-card
              className="group relative flex min-h-[430px] w-[82vw] max-w-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/55 backdrop-blur-sm transition-colors hover:border-pink-500/30 sm:w-[46%] sm:max-w-none lg:w-[31.6%]"
            >
              <div className="relative h-56 shrink-0 overflow-hidden sm:h-60">
                <ImageWithFallback
                  src={episode.image}
                  alt={episode.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: episode.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-pink-500/30 bg-black/60 px-3 py-1 backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-200">
                    {episode.title}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-pink-300">
                  {episode.guest}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {episode.description}
                </p>

                <div className="mt-auto pt-5">
                  <div className="h-px w-full bg-gradient-to-r from-pink-500/50 to-transparent" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .carousel-scroll {
          scrollbar-width: none;
        }

        .carousel-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
