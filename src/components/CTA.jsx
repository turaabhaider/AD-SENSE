import { useReveal } from '../hooks/useReveal';
import '../styles/CTA.css';

export default function CTA() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" ref={revealRef}>
      <div className="cta">
        <span className="label">Start Here</span>
        <h2>New to personal finance? Start with the seven-step roadmap.</h2>
        <p>A single page that walks you from your first paycheck to a fully funded retirement, in the right order. No email required. Bookmark it — it won't change next month.</p>
        <button className="btn btn-primary">Open the Roadmap &rarr;</button>
      </div>
    </section>
  );
}