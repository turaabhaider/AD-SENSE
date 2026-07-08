import { useReveal } from '../hooks/useReveal';
import '../styles/Hero.css';

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section className="container">
      <div className="hero reveal" ref={revealRef}>
        <div className="hero-img-wrapper">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop" alt="Financial graphs on laptop" />
        </div>
        <div className="hero-content">
          <span className="label">• THE FOUNDATIONS · CHAPTER 01</span>
          <h2>How compound interest actually works — and why starting ten years earlier is worth more than doubling your contributions.</h2>
          <p>A plain-English walk-through of the single most important idea in personal finance, with the exact tables, formulas, and worked examples that make it click. Once you understand this, every other money decision gets easier.</p>
          <div className="hero-author">
            <div className="author-avatar">EM</div>
            <div className="author-details">
              <strong>Elena Marsh</strong>
              <span>FOUNDING EDITOR · 14 MIN READ</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary">Read the Report</button>
            <button className="btn btn-outline">Open Calculator</button>
          </div>
        </div>
      </div>
    </section>
  );
}