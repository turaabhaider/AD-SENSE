import '../styles/Subpage.css';

export default function Privacy() {
  return (
    <div className="container subpage">
      <div className="subpage-header">
        <span className="label">Legal</span>
        <h1>Privacy Policy</h1>
      </div>
      <div className="subpage-content">
        <h2>Data Collection</h2>
        <p>We collect minimal data. The calculators on our site process information locally in your browser; we do not store your financial inputs.</p>
        <h2>Email Newsletter</h2>
        <p>If you opt-in to our newsletter, we store your email address solely for the purpose of sending you content. We will never sell or share this list with third parties.</p>
      </div>
    </div>
  );
}