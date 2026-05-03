import { useParams, Link } from "react-router-dom";
import events from "../data/events";
import "./EventDetail.css";

function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="not-found" id="event-not-found">
        <h2>😕 Event Not Found</h2>
        <p>The event you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="event-detail" id="event-detail-page">
      
      <div className="detail-container">

        <Link to="/" className="detail-back" id="detail-back-btn">
          ← Back
        </Link>

        <div className="detail-grid">
          
          <div className="detail-main">
            <div className="detail-image-wrapper">
               <img
                  src={event.image}
                  alt={event.title}
                  className="detail-main-img"
               />
            </div>

            <h1 className="detail-title">{event.title}</h1>

            <div className="detail-meta-list">
              <div className="meta-row">
                <span className="meta-icon">📅</span>
                <span className="meta-text">{event.date} • {event.time}</span>
              </div>
              <div className="meta-row">
                <span className="meta-icon">📍</span>
                <span className="meta-text">{event.location}</span>
              </div>
              <div className="meta-row">
                <span className="meta-icon">💰</span>
                <span className="meta-text">{event.price} onwards</span>
              </div>
            </div>

            <div className="detail-description">
              <h3>About</h3>
              <p>{event.description}</p>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="booking-card" id="booking-card">
              <h2 className="booking-title">{event.title}</h2>
              <div className="booking-price">
                <span className="booking-amount">{event.price}</span>
                <span className="booking-from">onwards</span>
              </div>

              <button className="book-btn" id="book-now-btn">
                Book Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
