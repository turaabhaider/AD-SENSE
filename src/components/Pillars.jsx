import { useReveal } from '../hooks/useReveal';
import '../styles/Pillars.css';

const pillarsData = [
  { num: '01', title: 'Budgeting that survives real life', desc: 'The zero-based, 50/30/20, and pay-yourself-first systems — how they actually differ and which fits your temperament.' },
  { num: '02', title: 'Getting out of debt for good', desc: 'Snowball vs. avalanche, when to consolidate, and the psychology that makes payoff plans stick past month three.' },
  { num: '03', title: 'The right insurance, no more', desc: 'Term life, disability, umbrella, health — what every household needs, and the expensive products most don\'t.' },
  { num: '04', title: 'Investing without gambling', desc: 'Index funds, asset allocation, and the two-page investment policy statement that keeps you calm in a crash.' },
  { num: '05', title: 'Retirement, from 25 to 65', desc: '401(k), IRA, Roth, HSA — the account-order playbook that maximizes tax-advantaged space at every income.' },
  { num: '06', title: 'Buying a home without regret', desc: 'How much house you can actually afford, fixed vs. adjustable, PMI, and closing costs demystified.' }
];

export default function Pillars() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" ref={revealRef}>
      <div className="pillars">
        <div className="section-header">
          <div>
            <span className="label">The Six Pillars</span>
            <h2>Everything, in six chapters.</h2>
          </div>
          <p>A complete curriculum. Read straight through, or dip into whichever chapter matches the decision in front of you.</p>
        </div>
        <div className="pillars-grid">
          {pillarsData.map((pillar, idx) => (
            <div className="pillar-card" key={idx}>
              <span className="pillar-num">{pillar.num}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
              <a href="#" className="link-arrow">Read Chapter &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}