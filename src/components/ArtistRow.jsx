import { useRef } from "react";
import "./ArtistRow.css";

function ArtistRow({ title, artists }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="artist-row">
      <div className="artist-header">
        <h2 className="artist-title">{title}</h2>
        <div className="artist-arrows">
          <button className="arrow-btn" onClick={scrollLeft}>
            ←
          </button>
          <button className="arrow-btn" onClick={scrollRight}>
            →
          </button>
        </div>
      </div>

      <div className="artist-scroll" ref={scrollRef}>
        {artists.map((artist) => (
          <div key={artist.id} className="artist-item">
            <div className="artist-avatar">
              <img src={artist.image} alt={artist.name} />
            </div>
            <p className="artist-name">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistRow;
