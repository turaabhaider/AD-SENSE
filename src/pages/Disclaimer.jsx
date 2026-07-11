import '../styles/Subpage.css';

export default function Disclaimer() {
  return (
    <div className="container subpage">
      <div className="subpage-header">
        <span className="label">Legal</span>
        <h1>Financial Disclaimer</h1>
      </div>
      <div className="subpage-content">
        <h2>Educational Purposes Only</h2>
        <p>The information provided on this website does not constitute financial, investment, tax, or legal advice. All content is meant for informational and educational purposes only.</p>
        <h2>No Fiduciary Duty</h2>
        <p>Reading our content or using our tools does not establish a fiduciary relationship. You should consult with a certified financial planner, tax professional, or attorney before making major financial decisions.</p>
      </div>
    </div>
  );
}