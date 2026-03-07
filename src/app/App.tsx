import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { EpisodesCarousel } from './components/EpisodesCarousel';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <EpisodesCarousel />
        <StatsSection />
      </main>
      
      <Footer />
    </div>
  );
}