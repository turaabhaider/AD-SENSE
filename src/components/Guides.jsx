import { useReveal } from '../hooks/useReveal';
import '../styles/Guides.css';

const guidesData = [
  { category: 'Insurance', id: '№31', title: 'Term life vs. whole life insurance: the honest comparison', desc: 'Whole life is sold; term life is bought. We break down the mathematical realities, commissions, and the rare situations where cash-value makes sense.', author: 'David Okafor', time: '11 min' },
  { category: 'Investing', id: '№32', title: 'Index funds explained: the strategy that beats 90% of professionals', desc: 'Why a portfolio of low-cost index funds consistently outperforms actively managed funds — and the fee arithmetic that guarantees it.', author: 'Priya Ramesh', time: '22 min' },
  { category: 'Credit', id: '№33', title: 'How your credit score is calculated — the five real factors', desc: 'Utilization, history, mix, inquiries, and new accounts. What actually moves the needle, and the common myths that waste money.', author: 'Marcus Whitfield', time: '9 min' },
  { category: 'Retirement', id: '№34', title: 'Roth vs. Traditional: the decision framework for all incomes', desc: 'Forget standard rule-of-thumb advice. We examine how marginal tax rates in retirement dictate the optimal account type for your current setup.', author: 'Elena Marsh', time: '16 min' }
];

export default function Guides() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" id="guides" ref={revealRef}>
      <div className="guides">
        <div className="section-header">
          <div>
            <span className="label">Editorial Articles</span>
            <h2>Most-Read Guides</h2>
          </div>
          <a href="#roadmap" className="link-arrow">Jump to Roadmap &rarr;</a>
        </div>
        <div className="guides-grid">
          {guidesData.map((guide, idx) => (
            <div className="guide-card" key={idx}>
              <div className="guide-meta">
                <span className="label">{guide.category}</span>
                <span className="label">{guide.id}</span>
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.desc}</p>
              <div className="guide-author">By {guide.author} · {guide.time} read</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}