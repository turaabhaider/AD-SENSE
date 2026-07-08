import { useReveal } from '../hooks/useReveal';
import '../styles/Pillars.css';

const pillarsData = [
  { num: '01', title: 'Budgeting that survives real life', desc: 'Zero-based, 50/30/20, and pay-yourself-first systems — how they actually differ and which fits your financial temperament.' },
  { num: '02', title: 'Getting out of debt for good', desc: 'Snowball vs. avalanche payoff, consolidation tactics, and the practical psychology that makes debt payoff plans stick.' },
  { num: '03', title: 'The right insurance, no more', desc: 'Term life, disability, umbrella, and health insurance — what every household needs, and the high-commission traps to avoid.' },
  { num: '04', title: 'Investing without gambling', desc: 'Index funds, strategic asset allocation, and the two-page investment policy statement that keeps you calm in market swings.' },
  { num: '05', title: 'Retirement, from 25 to 65', desc: '401(k), IRA, Roth, and HSA — the account prioritization playbook that maximizes tax savings across all income tiers.' },
  { num: '06', title: 'Buying a home without regret', desc: 'How much house you can afford, fixed vs. adjustable rates, PMI, and closing costs clearly demystified.' }
];

export default function Pillars() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" id="pillars" ref={revealRef}>
      <div className="pillars">
        <div className="section-header">
          <div>
            <span className="label">Core Curriculum</span>
            <h2>The Six Pillars of Wealth</h2>
          </div>
          <p>A structured curriculum. Read sequentially or jump directly to the chapter relevant to your current financial step.</p>
        </div>
        <div className="pillars-grid">
          {pillarsData.map((pillar, idx) => (
            <div className="pillar-card" key={idx}>
              <span className="pillar-num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
              <a href="#guides" className="link-arrow">Explore Topic &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}