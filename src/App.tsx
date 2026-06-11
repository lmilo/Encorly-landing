import GlobalBackground from './components/ui/GlobalBackground';
import ScrollProgress from './components/ui/ScrollProgress';
import SkipLink from './components/ui/SkipLink';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import SoundSwipeDemo from './components/SoundSwipeDemo';
import MusicDNA from './components/MusicDNA';
import Integrations from './components/Integrations';
import SocialProof from './components/SocialProof';
import Values from './components/Values';
import Waitlist from './components/Waitlist';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { usePageTitle } from './hooks/usePageTitle';

function App() {
  usePageTitle();

  return (
    <div className="min-h-screen antialiased">
      <GlobalBackground />
      <ScrollProgress />
      <SkipLink />
      <Navbar />
      <main id="contenido">
        <Hero />
        <HowItWorks />
        <Features />
        <SoundSwipeDemo />
        <MusicDNA />
        <Integrations />
        <SocialProof />
        <Values />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
