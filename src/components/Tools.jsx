import { useReveal } from '../hooks/useReveal';
import '../styles/Tools.css';

const toolsData = [
  { title: 'Compound interest calculator', sub: 'Any time horizon' },
  { title: 'Mortgage payment estimator', sub: 'Principal + interest' },
  { title: 'Term life coverage needs', sub: 'Income replacement' },
  { title: 'Roth vs. Traditional 401(k)', sub: 'Marginal-rate model' },
  { title: 'Debt payoff planner', sub: 'Snowball vs. Avalanche' },
  { title: 'Emergency fund sizer', sub: '3-12 months expenses' },
];

export default function Tools() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" ref={revealRef}>
      <div className="tools">
        <div className="tools-intro">
          <span className="label">Tools</span>
          <h2>Free calculators, updated with this week's rates.</h2>
          <p>Every number in our reporting is reproducible. Open the same models our editors use — no signup, no email wall.</p>
        </div>
        <div className="tools-grid">
          {toolsData.map((tool, idx) => (
            <a href="#" className="tool-link" key={idx}>
              <div className="tool-info">
                <h4>{tool.title}</h4>
                <span>{tool.sub}</span>
              </div>
              <span>&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}