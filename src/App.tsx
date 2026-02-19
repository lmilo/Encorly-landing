import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-negro-puro selection:bg-magenta-neon selection:text-negro-puro">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Values />
      </main>
      <Footer />
    </div>
  );
}

export default App;