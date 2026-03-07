import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface StatProps {
  value: string;
  label: string;
  sublabel: string;
  delay: number;
}

function StatCounter({ value, label, sublabel, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Extract numeric value
          const numericValue = parseInt(value.replace(/\D/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const displayValue = value.includes('+') 
    ? `${count}k+` 
    : value.includes('%') 
    ? `${count}%` 
    : `${count}+`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="text-center space-y-3 p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
          >
            {hasAnimated ? displayValue : value}
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="space-y-1">
          <p className="text-lg md:text-xl font-semibold text-white">
            {label}
          </p>
          <p className="text-sm text-gray-400">
            {sublabel}
          </p>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: '95%', label: 'Empregabilidade', sublabel: 'dos formados' },
    { value: '4', label: 'Anos', sublabel: 'de graduação' },
    { value: '40+', label: 'Disciplinas', sublabel: 'especializadas' },
    { value: '100%', label: 'Prática', sublabel: 'no mercado de trabalho' },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que Ciências Contábeis?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}