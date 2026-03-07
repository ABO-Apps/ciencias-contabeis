import { motion } from 'motion/react';
import { Youtube, Music, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800 px-4 py-16 lg:px-8">
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
              Forme-se no curso que transforma números em decisões estratégicas.
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
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-red-500 flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
                <span>YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-pink-500 flex items-center justify-center transition-colors">
                  <Music className="w-5 h-5" />
                </div>
                <span>Spotify</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-pink-500 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Instagram</span>
              </a>
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
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Curso de Ciências Contábeis AMF
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Antonio Meneghetti Faculdade
              </a>
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