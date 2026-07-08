import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Guides from './components/Guides';
import Tools from './components/Tools';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Guides />
        <Tools />
        <CTA />
      </main>
      <Footer />
    </>
  );
}