import { useReveal } from '../hooks/useReveal';
import '../styles/Events.css';

const eventsData = [
  { city: 'New York', venue: 'Financial Literacy Center', address: '123 Wall St, NY 10005', phone: '1 212 555 0198', website: 'ledgercompass.com/ny', accommodation: 'Included' },
  { city: 'London', venue: 'The Wealth Expo', address: '45 City Rd, EC1V 2NX', phone: '44 20 7946 0958', website: 'ledgercompass.co.uk', accommodation: 'Self-arranged' },
  { city: 'Chicago', venue: 'Midwest Investor Summit', address: '200 Navy Pier, IL 60611', phone: '1 312 555 8734', website: 'ledgercompass.com/chi', accommodation: 'Included' }
];

export default function Events() {
  const revealRef = useReveal();

  return (
    <section className="container reveal" id="events" ref={revealRef}>
      <div className="events-section">
        <div className="section-header">
          <div>
            <span className="label">Live Education</span>
            <h2>Upcoming Seminars</h2>
          </div>
          <p>Join our editors for deep dives into personal finance strategies.</p>
        </div>
        <div className="table-wrapper">
          <table className="events-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Event / Venue Name</th>
                <th>Address</th>
                <th></th>
                <th>Phone Number</th>
                <th></th>
                <th>Website URL</th>
                <th>Accommodation</th>
              </tr>
            </thead>
            <tbody>
              {eventsData.map((event, idx) => (
                <tr key={idx}>
                  <td><strong>{event.city}</strong></td>
                  <td>{event.venue}</td>
                  <td>{event.address}</td>
                  <td></td>
                  <td>{event.phone}</td>
                  <td></td>
                  <td><a href={`https://${event.website}`}>{event.website}</a></td>
                  <td><span className={`acc-badge ${event.accommodation === 'Included' ? 'inc' : 'exc'}`}>{event.accommodation}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}