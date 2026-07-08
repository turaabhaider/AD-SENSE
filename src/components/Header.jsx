import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>The Evergreen Library</span>
          <span className="top-bar-center">Timeless personal-finance guides · Read in any order · Free forever</span>
          <span>140+ Guides</span>
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
            <a href="#mortgages">Mortgages</a>
            <a href="#insurance">Insurance</a>
            <a href="#investing">Investing</a>
            <a href="#credit">Credit</a>
            <a href="#retirement">Retirement</a>
            <a href="#taxes">Taxes</a>
          </nav>
        </div>
      </header>
    </>
  );
}