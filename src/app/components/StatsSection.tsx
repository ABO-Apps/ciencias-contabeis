import { motion } from 'motion/react';
import { Award, CalendarDays, GraduationCap, MapPin } from 'lucide-react';

const courseFacts = [
  {
    icon: Award,
    label: 'MEC',
    value: 'Nota 5',
    description: 'Reconhecimento de qualidade do curso.',
  },
  {
    icon: CalendarDays,
    label: 'Duração',
    value: '4 anos',
    description: 'Formação completa em Ciências Contábeis.',
  },
  {
    icon: GraduationCap,
    label: 'Modalidade',
    value: 'Bacharelado',
    description: 'Graduação para atuação profissional na área contábil.',
  },
  {
    icon: MapPin,
    label: 'Tipo de curso',
    value: 'Presencial',
    description: 'Vivência acadêmica no ambiente da AMF.',
  },
];

export function StatsSection() {
  return (
    <section id="curso" className="relative scroll-mt-20 px-4 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-5"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">
            Informações do curso
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            O básico para decidir com clareza
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Dados essenciais do Bacharelado em Ciências Contábeis da AMF, apresentados sem complicar a leitura.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {courseFacts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm transition-colors hover:border-pink-500/40 sm:p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/12 text-pink-300 ring-1 ring-pink-500/20 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    {fact.label}
                  </span>
                </div>

                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {fact.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
