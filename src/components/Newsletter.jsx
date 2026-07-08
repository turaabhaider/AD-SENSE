import { useReveal } from '../hooks/useReveal';
import '../styles/Newsletter.css';

export default function Newsletter() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" ref={revealRef}>
      <div className="newsletter-box">
        <div className="newsletter-content">
          <span className="label">The Ledger Weekly</span>
          <h2>Clear financial analysis, delivered every Sunday.</h2>
          <p>Join 85,000+ readers getting our best independent research and frameworks sent straight to their inbox. No spam, just math.</p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}