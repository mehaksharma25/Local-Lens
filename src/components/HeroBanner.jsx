function HeroBanner({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <section className="movies-hero">
      <div className="movies-hero-card">
        <div className="movies-hero-content">
          <p className="movies-hero-kicker">Now Showing</p>
          <h1 className="movies-hero-title">{movie.title}</h1>

          <div className="movies-hero-meta">
            <span className="movies-hero-pill">{movie.certificate}</span>
            <span className="movies-hero-pill">{movie.genres.join(" • ")}</span>
          </div>

          <p className="movies-hero-description">{movie.description}</p>

          <button type="button" className="movies-hero-button">
            Book Now
          </button>
        </div>

        <div className="movies-hero-poster-wrap">
          <img
            src={movie.image}
            alt={movie.title}
            className="movies-hero-poster"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
