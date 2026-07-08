import { useReveal } from '../hooks/useReveal';
import '../styles/Guides.css';

const guidesData = [
  { category: 'Insurance', id: '№31', title: 'Term life vs. whole life insurance: the honest comparison nobody sells you', desc: 'Whole life is sold; term life is bought. We break down the math, the commissions, and the three household situations where each one actually makes sense.', author: 'David Okafor', time: '11 min' },
  { category: 'Investing', id: '№32', title: 'Index funds explained: the boring strategy that beats 90% of professionals', desc: 'Why a portfolio of two or three low-cost index funds outperforms almost every actively managed alternative — and the fee arithmetic that guarantees it over long horizons.', author: 'Priya Ramesh', time: '22 min' },
  { category: 'Credit', id: '№33', title: 'How your credit score is really calculated — the five factors, in plain English', desc: 'Utilization, history, mix, inquiries, new accounts. What each one weighs, what actually moves the needle, and the myths that cost people thousands in interest.', author: 'Marcus Whitfield', time: '9 min' },
  { category: 'Retirement', id: '№34', title: 'Roth vs. Traditional: the decision framework that works for every income level', desc: 'Forget the tax-bracket rules of thumb. We show the underlying question — what will your marginal rate be in retirement? — and how to answer it honestly.', author: 'Elena Marsh', time: '16 min' }
];

export default function Guides() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" ref={revealRef}>
      <div className="guides">
        <div className="section-header">
          <h2>Most-read guides</h2>
          <a href="#" className="link-arrow">Browse the Library &rarr;</a>
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
              <div className="guide-author">By {guide.author} · {guide.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}