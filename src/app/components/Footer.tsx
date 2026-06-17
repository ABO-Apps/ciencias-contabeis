import { motion } from 'motion/react';
import { Youtube, Music, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@lucrativamente_podcast',
      icon: Youtube,
      hover: 'hover:text-red-500',
      border: 'group-hover:border-red-500',
    },
    {
      label: 'Instagram Lucrativamente',
      href: 'https://www.instagram.com/podcastlucrativamente/',
      icon: Instagram,
      hover: 'hover:text-pink-500',
      border: 'group-hover:border-pink-500',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@podcastlucrativamente',
      icon: Music,
      hover: 'hover:text-cyan-400',
      border: 'group-hover:border-cyan-400',
    },
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/show/5jl1ppEWrVMcTtyQJdDY3E?si=33a62bd0c4c54b90',
      icon: Music,
      hover: 'hover:text-green-500',
      border: 'group-hover:border-green-500',
    },
  ];

  return (
    <footer id="contato" className="relative bg-black border-t border-gray-800 px-4 py-16 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="space-y-4 lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white"
            >
              CIÊNCIAS CONTÁBEIS
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-md"
            >
              Formação prática em contabilidade, finanças, gestão e carreira.
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Acompanhe
            </h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map(({ label, href, icon: Icon, hover, border }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center space-x-3 text-gray-300 ${hover} transition-colors group`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 ${border} flex items-center justify-center transition-colors`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Institutional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Institucional
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/cienciascontabeis.amf/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Instagram do curso
              </a>
              <div className="pt-2 space-y-2 text-gray-400">
                <p className="font-semibold text-gray-300">Coordenação</p>
                <p>Profª Ms. Leandra Calegare Meneghetti</p>
                <a
                  href="tel:+555532891141"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(55) 3289-1141</span>
                </a>
                <a
                  href="mailto:coordcontabeis@faculdadeam.edu.br"
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>coordcontabeis@faculdadeam.edu.br</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2026 Ciências Contábeis AMF. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Antonio Meneghetti Faculdade
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
    </footer>
  );
}
