import { useRef } from "react";
import EventCard from "./EventCard";
import "./SectionRow.css";

function SectionRow({ title, events, id }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="section-row" id={id}>
      
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-arrows">
          <button
            className="arrow-btn"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            className="arrow-btn"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      <div className="section-scroll" ref={scrollRef}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default SectionRow;
