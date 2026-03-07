import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-20 lg:px-8 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-pink-300 font-medium">Ciências Contábeis AMF</span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
                  Curso de Ciências Contábeis
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                  Domine os números e controle seu futuro profissional
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Formação completa para ser o profissional que empresas procuram: contador estratégico, consultor e tomador de decisões
              </p>
            </div>

            {/* Quote */}
            <div className="inline-block">
              <div className="p-6 bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 border-l-4 border-pink-500 rounded-r-xl backdrop-blur-sm">
                <p className="text-xl text-white font-semibold">
                  "Quem domina a contabilidade, domina as decisões estratégicas da empresa."
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span>4 anos de formação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span>Corpo docente especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span>Mercado aquecido</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-pink-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative">
                <div className="text-center mb-8 space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Interessado em Ciências Contábeis?
                  </h3>
                  <p className="text-gray-400">
                    Receba informações sobre carreira e mercado
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome completo"
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 backdrop-blur-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 backdrop-blur-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefone / WhatsApp"
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 backdrop-blur-sm transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Estado"
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 backdrop-blur-sm transition-all"
                      required
                    />

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Cidade"
                      className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 backdrop-blur-sm transition-all"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-pink-500/30 mt-2"
                  >
                    Quero saber mais
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-pink-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}