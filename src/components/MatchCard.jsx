function MatchCard({ match }) {
  const isLive = match.status === "live";

  return (
    <article className="match-card">
      <div className="match-card-date">
        <span className="match-card-day">{match.day}</span>
        <span className="match-card-number">{match.date}</span>
        <span className="match-card-month">{match.month}</span>
      </div>

      <div className="match-card-main">
        <div className="match-card-teams">
          <span className="match-team-logo">{match.team1Short}</span>
          <span className="match-card-versus">vs</span>
          <span className="match-team-logo alt">{match.team2Short}</span>
        </div>

        <div className="match-card-copy">
          <h3 className="match-card-title">
            {match.team1} vs {match.team2}
          </h3>
          <p className="match-card-stadium">{match.stadium}</p>
          <p className="match-card-time">{match.time}</p>
        </div>
      </div>

      <div className="match-card-actions">
        <div className={`match-card-status${isLive ? " live" : ""}`}>
          {isLive && <span className="match-card-status-dot" />}
          <span>{isLive ? "Sale is live" : "Coming soon"}</span>
        </div>

        <button
          type="button"
          className={`match-card-button${isLive ? " active" : " disabled"}`}
          disabled={!isLive}
        >
          {isLive ? "Book tickets" : "Coming soon"}
        </button>
      </div>
    </article>
  );
}

export default MatchCard;
