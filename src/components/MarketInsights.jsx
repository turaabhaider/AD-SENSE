import { useReveal } from '../hooks/useReveal';
import '../styles/MarketInsights.css';

const insightsData = [
  { ticker: 'S&P 500', trend: 'Bullish', takeaway: 'Historical data suggests steady dollar-cost averaging beats market timing over a 20-year horizon.' },
  { ticker: 'Interest Rates', trend: 'Neutral', takeaway: 'High-yield savings accounts remain competitive. Lock in CD rates if you anticipate a central bank pivot.' },
  { ticker: 'Real Estate', trend: 'Cooling', takeaway: 'Inventory is slowly recovering. Cash buyers hold the leverage in secondary markets.' }
];

export default function MarketInsights() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" id="insights" ref={revealRef}>
      <div className="insights">
        <div className="section-header">
          <div>
            <span className="label">Macro View</span>
            <h2>Current Market Context</h2>
          </div>
        </div>
        <div className="insights-grid">
          {insightsData.map((item, idx) => (
            <div className="insight-card" key={idx}>
              <div className="insight-header">
                <h3>{item.ticker}</h3>
                <span className={`trend-badge ${item.trend.toLowerCase()}`}>{item.trend}</span>
              </div>
              <p>{item.takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}