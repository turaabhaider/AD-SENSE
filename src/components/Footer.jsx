import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Ledger <span>&</span> Compass</div>
            <p className="footer-desc">Independent personal finance journalism since 2011. No affiliate arrangements with lenders, brokers, or insurers.</p>
          </div>
          <div className="footer-col">
            <h4>Sections</h4>
            <ul>
              <li><a href="#">Mortgages</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Investing</a></li>
              <li><a href="#">Retirement</a></li>
              <li><a href="#">Taxes</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Tools</h4>
            <ul>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Rate tracker</a></li>
              <li><a href="#">Broker reviews</a></li>
              <li><a href="#">Coverage guides</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Editorial standards</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 Ledger & Compass Media, Inc.</div>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Do not sell my info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}