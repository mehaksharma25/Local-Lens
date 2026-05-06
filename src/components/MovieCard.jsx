function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-card-image-wrap">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-card-image"
        />
      </div>

      <div className="movie-card-body">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-meta">{movie.language} • {movie.rating}</p>
      </div>
    </article>
  );
}

export default MovieCard;
