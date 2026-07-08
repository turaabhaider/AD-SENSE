import '../styles/Subpage.css';

export default function Contact() {
  return (
    <div className="container subpage">
      <div className="subpage-header">
        <span className="label">Get in Touch</span>
        <h1>Contact Us</h1>
      </div>
      <div className="subpage-content">
        <p>For editorial inquiries, corrections, or media requests, please direct your communications appropriately.</p>
        <h2>Editorial Team</h2>
        <p>Email: editors@ledgercompass.com</p>
        <h2>Press & Media</h2>
        <p>Email: press@ledgercompass.com</p>
        <p>Please note that we do not accept unsolicited guest posts, sponsored content, or paid backlink requests.</p>
      </div>
    </div>
  );
}