import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard({ event }) {
  return (
    <Link
      to={`/event/${event.id}`}
      className="event-card"
      id={`event-card-${event.id}`}
    >
      
      <div className="card-image-wrapper">
        <img src={event.image} alt={event.title} className="card-image" />
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span className="card-date">
            {event.date} • {event.time}
          </span>
        </div>
        <h3 className="card-title">{event.title}</h3>

        <div className="card-meta">
          <span className="card-location">{event.location}</span>
        </div>
        
        <span className="card-price">{event.price} onwards</span>
      </div>
    </Link>
  );
}

export default EventCard;
