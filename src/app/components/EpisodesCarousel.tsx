import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

const episodes = [
  {
    id: 1,
    title: 'Contabilidade Gerencial',
    guest: 'Prof. Dr. Carlos Eduardo',
    description: 'Análise de custos e formação de preços para tomada de decisão estratégica',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MjY0NDQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Auditoria e Perícia',
    guest: 'Prof. Msc. Ana Carolina',
    description: 'Técnicas de auditoria interna e externa aplicadas ao mercado',
    image: 'https://images.unsplash.com/photo-1758518729829-162d6bf27b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBmaW5hbmNpYWwlMjBhbmFseXNpc3xlbnwxfHx8fDE3NzI2NDQ0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Contabilidade Tributária',
    guest: 'Prof. Esp. Ricardo Mendes',
    description: 'Planejamento tributário e compliance fiscal para empresas',
    image: 'https://images.unsplash.com/photo-1688039763740-9036cb5d566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb2RjYXN0JTIwc3R1ZGlvJTIwcmVjb3JkaW5nfGVufDF8fHx8MTc3MjY0NDQwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Análise Financeira',
    guest: 'Prof. Dra. Juliana Santos',
    description: 'Demonstrações contábeis e indicadores de performance empresarial',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI2NDQ0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Controladoria',
    guest: 'Prof. Msc. Pedro Oliveira',
    description: 'Sistemas de controle gerencial e governança corporativa',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzfGVufDF8fHx8MTc3MjY0NDQxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Contabilidade Digital',
    guest: 'Prof. Esp. Mariana Costa',
    description: 'Tecnologias emergentes e transformação digital na contabilidade',
    image: 'https://images.unsplash.com/photo-1758518729829-162d6bf27b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBmaW5hbmNpYWwlMjBhbmFseXNpc3xlbnwxfHx8fDE3NzI2NDQ0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function EpisodesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 4000,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 3000,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: 'ease-in-out',
        },
      },
    ],
  };

  return (
    <section className="py-24 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Áreas de Atuação
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça as principais disciplinas e especializações do curso
          </p>
        </motion.div>

        <div className="carousel-container -mx-4 md:mx-0">
          <Slider {...settings}>
            {episodes.map((episode) => (
              <div key={episode.id} className="px-2 md:px-3">
                <div className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300 h-full">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <ImageWithFallback
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                    <div className="inline-block px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full">
                      <span className="text-xs font-semibold text-pink-300">{episode.title}</span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {episode.guest}
                    </h3>
                    
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {episode.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-fuchsia-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .carousel-container .slick-track {
          display: flex !important;
          gap: 0;
        }
        
        .carousel-container .slick-slide {
          height: inherit !important;
        }
        
        .carousel-container .slick-slide > div {
          height: 100%;
        }

        .carousel-container .slick-dots {
          bottom: -40px;
        }

        .carousel-container .slick-dots li button:before {
          font-size: 10px;
          color: #ec4899;
          opacity: 0.5;
        }

        .carousel-container .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #ec4899;
        }

        @media (max-width: 640px) {
          .carousel-container {
            padding: 0 8px;
          }

          .carousel-container .slick-dots {
            bottom: -35px;
          }

          .carousel-container .slick-dots li {
            margin: 0 3px;
          }

          .carousel-container .slick-dots li button:before {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}