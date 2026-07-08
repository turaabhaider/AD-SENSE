import { useReveal } from '../hooks/useReveal';
import '../styles/Tools.css';

const toolsData = [
  { title: 'Compound Interest Calculator', sub: 'Flexible Time Horizon' },
  { title: 'Mortgage Payment Estimator', sub: 'Principal, Interest & Taxes' },
  { title: 'Term Life Coverage Calculator', sub: 'Income Replacement Model' },
  { title: 'Roth vs. Traditional 401(k)', sub: 'Tax Optimization Matrix' },
  { title: 'Debt Payoff Planner', sub: 'Snowball vs. Avalanche Comparison' },
  { title: 'Emergency Fund Sizer', sub: '3 to 12 Months Expense Model' },
];

export default function Tools() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" id="tools" ref={revealRef}>
      <div className="tools">
        <div className="tools-intro">
          <span className="label">Interactive Utilities</span>
          <h2>Financial Calculators & Decision Tools</h2>
          <p>Every calculation in our guides is reproducible. Open the exact models our editors use — completely open, ad-free, and private.</p>
        </div>
        <div className="tools-grid">
          {toolsData.map((tool, idx) => (
            <div className="tool-link" key={idx}>
              <div className="tool-info">
                <h4>{tool.title}</h4>
                <span>{tool.sub}</span>
              </div>
              <span>&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}