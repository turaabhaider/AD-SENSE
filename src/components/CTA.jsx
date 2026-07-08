import { useReveal } from '../hooks/useReveal';
import '../styles/CTA.css';

export default function CTA() {
  const revealRef = useReveal();

  const handleStart = () => {
    const element = document.getElementById('foundations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container reveal" id="roadmap" ref={revealRef}>
      <div className="cta">
        <span className="label">The Roadmap</span>
        <h2>New to personal finance? Start with our step-by-step framework.</h2>
        <p>A single clear framework that guides you from your first paycheck to financial independence in the correct order. Free forever with no account required.</p>
        <button className="btn btn-primary" onClick={handleStart}>Back to Foundations &uarr;</button>
      </div>
    </section>
  );
}