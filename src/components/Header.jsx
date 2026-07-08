import '../styles/Header.css';

export default function Header() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>The Evergreen Library</span>
          <span className="top-bar-center">Timeless personal-finance guides · Free & Independent</span>
          <span>140+ Reference Guides</span>
        </div>
      </div>
      <header className="main-header">
        <div className="container">
          <div className="header-top">
            <div className="header-meta">A Reference<br />Library</div>
            <div className="logo">
              <h1>Ledger <span>&</span> Compass</h1>
              <div className="logo-sub">Timeless Guides to Money, Investing & Insurance</div>
            </div>
            <div className="header-meta right">Free · No<br />Signup</div>
          </div>
          <nav className="main-nav">
            <a href="#foundations" onClick={(e) => handleScroll(e, 'foundations')}>Foundations</a>
            <a href="#pillars" onClick={(e) => handleScroll(e, 'pillars')}>Six Pillars</a>
            <a href="#guides" onClick={(e) => handleScroll(e, 'guides')}>Guides</a>
            <a href="#tools" onClick={(e) => handleScroll(e, 'tools')}>Tools</a>
            <a href="#roadmap" onClick={(e) => handleScroll(e, 'roadmap')}>Roadmap</a>
          </nav>
        </div>
      </header>
    </>
  );
}