import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Guides from './components/Guides';
import Tools from './components/Tools';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Pages
import About from './pages/About';
import EditorialStandards from './pages/EditorialStandards';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Home Page Route - Renders all sections */}
        <Route path="/" element={
          <main>
            <Hero />
            <Pillars />
            <Guides />
            <Tools />
            <CTA />
          </main>
        } />
        
        {/* Footer Subpages Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/editorial-standards" element={<EditorialStandards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </>
  );
}