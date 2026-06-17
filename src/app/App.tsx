import { AnimatedBackground } from './components/AnimatedBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EpisodesCarousel } from './components/EpisodesCarousel';
import { StatsSection } from './components/StatsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <EpisodesCarousel />
        <StatsSection />
        <CurriculumSection />
      </main>
      
      <Footer />
    </div>
  );
}
