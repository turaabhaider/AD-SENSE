import { useReveal } from '../hooks/useReveal';
import '../styles/Hero.css';

export default function Hero() {
  const revealRef = useReveal();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container" id="foundations">
      <div className="hero reveal" ref={revealRef}>
        <div className="hero-img-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" 
            alt="Financial charts analysis" 
          />
        </div>
        <div className="hero-content">
          <span className="label">• THE FOUNDATIONS · CHAPTER 01</span>
          <h2>How compound interest actually works — and why starting ten years earlier outperforms doubling your savings.</h2>
          <p>A plain-English walk-through of the single most important idea in personal finance, with exact mathematical breakdowns and worked examples. Once you master this foundation, every money decision becomes straightforward.</p>
          <div className="hero-author">
            <div className="author-avatar">EM</div>
            <div className="author-details">
              <strong>Elena Marsh</strong>
              <span>FOUNDING EDITOR · 14 MIN READ</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => handleScroll('guides')}>Read Featured Guides</button>
            <button className="btn btn-outline" onClick={() => handleScroll('tools')}>Explore Tools</button>
          </div>
        </div>
      </div>
    </section>
  );
}