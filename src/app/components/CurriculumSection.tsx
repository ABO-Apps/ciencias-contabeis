import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Search } from 'lucide-react';

type Subject = {
  name: string;
  hours: string;
};

type Semester = {
  label: string;
  subjects: Subject[];
};

const semesters: Semester[] = [
  {
    label: '1º Semestre',
    subjects: [
      { name: 'Comunicação Empresarial', hours: '60h' },
      { name: 'Contabilidade Geral', hours: '60h' },
      { name: 'Macroeconomia', hours: '60h' },
      { name: 'Matemática Aplicada', hours: '60h' },
      { name: 'O Mundo do Trabalho e a Contabilidade', hours: '60h' },
      { name: 'Teoria Geral da Administração', hours: '60h' },
    ],
  },
  {
    label: '2º Semestre',
    subjects: [
      { name: 'Competência Competitiva na Contabilidade', hours: '60h' },
      { name: 'Contabilidade Intermediária', hours: '60h' },
      { name: 'Estatística Aplicada a Negócios', hours: '60h' },
      { name: 'Matemática Financeira', hours: '60h' },
      { name: 'Microeconomia', hours: '60h' },
      { name: 'Sistemas de Informação Gerencial', hours: '60h' },
    ],
  },
  {
    label: '3º Semestre',
    subjects: [
      { name: 'Contabilidade Avançada', hours: '60h' },
      { name: 'Contabilidade de Custo', hours: '60h' },
      { name: 'Fundamentos de Filosofia, Ética e Legislação Profissional', hours: '60h' },
      { name: 'Metodologia da Pesquisa e do Trabalho Científico', hours: '30h' },
      { name: 'Personalidade e Carreiras Contábeis', hours: '60h' },
      { name: 'Teoria da Contabilidade', hours: '60h' },
    ],
  },
  {
    label: '4º Semestre',
    subjects: [
      { name: 'Contabilidade Societária', hours: '60h' },
      { name: 'Direito Empresarial', hours: '60h' },
      { name: 'Gestão Estratégica de Custos', hours: '60h' },
      { name: 'Legislação Social e Prática Trabalhista', hours: '60h' },
      { name: 'Liderança nas Profissões Contábeis', hours: '60h' },
      { name: 'Psicologia Organizacional', hours: '60h' },
    ],
  },
  {
    label: '5º Semestre',
    subjects: [
      { name: 'Análise das Demonstrações Contábeis', hours: '60h' },
      { name: 'Constituição e Arranjos de Empresa', hours: '60h' },
      { name: 'Contabilidade Gerencial', hours: '60h' },
      { name: 'Desenvolvimento de Carreira e Liderança', hours: '60h' },
      { name: 'Legislação e Contabilidade Tributária', hours: '60h' },
      { name: 'Mercado de Capitais', hours: '60h' },
    ],
  },
  {
    label: '6º Semestre',
    subjects: [
      { name: 'Atuarial', hours: '60h' },
      { name: 'Laboratório de Contabilidade e Gestão', hours: '60h' },
      { name: 'Mercado Financeiro e Investimentos', hours: '60h' },
      { name: 'Planejamento Tributário', hours: '60h' },
      { name: 'Psicologia e Dinâmica Empresarial', hours: '60h' },
    ],
  },
  {
    label: '7º Semestre',
    subjects: [
      { name: 'Auditoria', hours: '60h' },
      { name: 'Contabilidade Aplicada ao Setor Público', hours: '60h' },
      { name: 'Estágio Supervisionado', hours: '160h' },
      { name: 'Finanças Corporativas', hours: '60h' },
      { name: 'Ontopsicologia Aplicada à Contabilidade I', hours: '60h' },
      { name: 'Técnicas para Elaboração do Trabalho de Conclusão', hours: '60h' },
    ],
  },
  {
    label: '8º Semestre',
    subjects: [
      { name: 'Controladoria', hours: '60h' },
      { name: 'Finanças Públicas', hours: '60h' },
      { name: 'Ontopsicologia Aplicada à Contabilidade II', hours: '60h' },
      { name: 'Perícia, Avaliação e Arbitragem', hours: '30h' },
      { name: 'Planejamento Estratégico e Orçamento Empresarial', hours: '60h' },
      { name: 'Trabalho de Conclusão de Curso', hours: '60h' },
    ],
  },
  {
    label: 'Complementares',
    subjects: [
      { name: 'A música como ordem de vida percepção e cultura musical', hours: '30h' },
      { name: 'Contabilidade do Terceiro Setor', hours: '60h' },
      { name: 'Contabilidade Internacional', hours: '30h' },
      { name: 'Controladoria para o Agronegócio e Gestão Ambiental', hours: '60h' },
      { name: 'Cultura Humanista e Igualdade nas Relações Étnico-Raciais', hours: '60h' },
      { name: 'Dinâmica do Desenvolvimento Sustentável e Ecobiologia', hours: '36h' },
      { name: 'Direitos e Deveres Humanos', hours: '30h' },
      { name: 'Estética como ética', hours: '30h' },
      { name: 'Inglês Instrumental', hours: '60h' },
      { name: 'Instituições de Direito Público e Privado', hours: '60h' },
      { name: 'Jogos de Empresa', hours: '60h' },
      { name: 'Língua Brasileira de Sinais (Libras)', hours: '60h' },
      { name: 'Nas raízes do Humanismo', hours: '30h' },
      { name: 'Obrigações Acessórias em Contabilidade', hours: '60h' },
      { name: 'Tópicos Especiais em Contabilidade', hours: '60h' },
      { name: 'Trivium: as artes da linguagem', hours: '60h' },
      { name: 'World Leaders', hours: '60h' },
    ],
  },
];

export function CurriculumSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const activeSemester = semesters[activeIndex];
  const filteredSubjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return activeSemester.subjects;
    }

    return activeSemester.subjects.filter((subject) =>
      subject.name.toLowerCase().includes(normalizedSearch),
    );
  }, [activeSemester, searchTerm]);

  return (
    <section id="matriz" className="relative scroll-mt-20 px-4 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">
              Matriz curricular
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              O que você estuda
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Navegue por semestre e veja as disciplinas com a respectiva carga horária.
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar disciplina"
              className="w-full rounded-xl border border-white/10 bg-black/45 py-3 pl-12 pr-4 text-white placeholder-gray-300 outline-none transition-colors focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20"
            />
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-1">
            {semesters.map((semester, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={semester.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors sm:shrink ${
                    isActive
                      ? 'border-pink-500/60 bg-pink-500/15 text-white'
                      : 'border-white/10 bg-white/[0.04] text-gray-400 hover:border-pink-500/30 hover:text-white'
                  }`}
                >
                  {semester.label}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeSemester.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm md:p-6"
          >
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/12 text-pink-300 ring-1 ring-pink-500/20 sm:h-11 sm:w-11">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-bold text-white sm:text-2xl">
                    {activeSemester.label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {filteredSubjects.length} disciplinas
                  </p>
                </div>
              </div>
              <span className="hidden rounded-lg border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-400 sm:inline-flex">
                CH
              </span>
            </div>

            <div className="grid gap-3">
              {filteredSubjects.map((subject) => (
                <div
                  key={`${activeSemester.label}-${subject.name}`}
                  className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:items-center sm:gap-4 sm:px-4"
                >
                  <p className="text-sm font-medium leading-relaxed text-gray-200 md:text-base">
                    {subject.name}
                  </p>
                  <span className="shrink-0 rounded-lg bg-pink-500/12 px-3 py-1 text-sm font-semibold text-pink-200">
                    {subject.hours}
                  </span>
                </div>
              ))}
            </div>

            {filteredSubjects.length === 0 && (
              <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-gray-400">
                Nenhuma disciplina encontrada neste semestre.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
