import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const brazilianStates = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const webhookUrl = import.meta.env.VITE_GSHEETS_WEBHOOK_URL?.trim();
    const token = import.meta.env.VITE_GSHEETS_TOKEN?.trim();
    const sheetName = import.meta.env.VITE_SHEET_NAME?.trim() || 'Leads';

    if (import.meta.env.DEV) {
      const tokenPreview = token ? `${token.slice(0, 8)}...` : 'missing';
      console.log('[gsheets] submitting', { webhookUrl, tokenPreview, sheetName });
    }

    if (!webhookUrl || !token) {
      const missingVars = [
        !webhookUrl ? 'VITE_GSHEETS_WEBHOOK_URL' : null,
        !token ? 'VITE_GSHEETS_TOKEN' : null,
      ].filter(Boolean).join(', ');
      setSubmitError(`Configuracao ausente: ${missingVars}.`);
      return;
    }

    if (token.startsWith('$2') && !/^\$2[aby]\$\d{2}\$/.test(token)) {
      setSubmitError('Token invalido no .env. Escape "$" como "\\$" e reinicie o vite.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams({
        token,
        sheet_name: sheetName,
        submittedAt: new Date().toISOString(),
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        estado: formData.state,
        cidade: formData.city,
      });
      const payloadString = payload.toString();

      await fetch(`${webhookUrl}?${payloadString}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payloadString,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        state: '',
        city: '',
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Falha ao enviar formulario.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-24 sm:pb-20 sm:pt-28 lg:px-8">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-2 backdrop-blur-sm sm:px-4">
                <Sparkles className="h-4 w-4 shrink-0 text-pink-400" />
                <span className="truncate text-xs font-medium text-pink-300 sm:text-sm">Ciências Contábeis AMF</span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
                  Curso de Ciências Contábeis
                </p>
                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Feito pra te mostrar o mundo da contabilidade
                </h1>
              </div>
              
              <p className="text-base leading-relaxed text-gray-400 sm:text-xl md:text-2xl">
                Excelência nas funções de contador, analista e especialista na área contábil.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['Fiscal', 'leis, tributos e segurança'],
                ['Gestão', 'dados para decidir melhor'],
                ['Mercado', 'negócios, carreira e prática'],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm transition-colors hover:border-pink-500/30 sm:rounded-2xl sm:p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-300 sm:text-sm">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400 sm:mt-2">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div id="lead-form" className="relative scroll-mt-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-8">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative">
                <div className="mb-6 space-y-2 text-center sm:mb-8">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Interessado em Ciências Contábeis?
                  </h3>
                  <p className="text-sm text-gray-400 sm:text-base">
                    Receba informações do curso e fale com a coordenação
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                      Nome completo
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 sm:px-5 sm:py-4"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seuemail@exemplo.com"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 sm:px-5 sm:py-4"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(55) 99999-9999"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 sm:px-5 sm:py-4"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="state" className="mb-2 block text-sm font-medium text-gray-300">
                        UF
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm transition-all focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 sm:px-5 sm:py-4 ${formData.state ? 'text-white' : 'text-gray-300'}`}
                        required
                      >
                        <option value="" className="bg-gray-950 text-gray-300">Selecione</option>
                        {brazilianStates.map((state) => (
                          <option key={state} value={state} className="bg-gray-950 text-white">
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-300">
                        Cidade
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Digite sua cidade"
                        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm transition-all focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 sm:px-5 sm:py-4"
                        required
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 py-3.5 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:from-pink-600 hover:to-fuchsia-600 sm:py-4 sm:text-lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Quero saber mais'}
                  </motion.button>

                  {submitError && (
                    <p className="text-xs text-red-400 text-center">{submitError}</p>
                  )}

                  <p className="text-center text-xs text-gray-500">
                    Ao enviar, você concorda em receber informações sobre o curso
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-pink-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
