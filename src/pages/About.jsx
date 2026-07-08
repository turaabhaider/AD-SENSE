import '../styles/Subpage.css';

export default function About() {
  return (
    <div className="container subpage">
      <div className="subpage-header">
        <span className="label">Company</span>
        <h1>About Us</h1>
      </div>
      <div className="subpage-content">
        <p>Ledger & Compass was founded in 2011 to solve a specific problem: most financial journalism is either too academic to be useful or explicitly designed to sell you high-margin financial products.</p>
        <h2>Our Mission</h2>
        <p>We believe in math, long time horizons, and low fees. We build educational models and write extensive guides that assume you are intelligent but perhaps unfamiliar with financial jargon.</p>
      </div>
    </div>
  );
}