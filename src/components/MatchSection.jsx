import MatchCard from "./MatchCard";

function MatchSection({ title, matches }) {
  return (
    <section className="match-section">
      <div className="match-section-head">
        <h2 className="match-section-title">{title}</h2>
      </div>

      <div className="match-section-list">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}

export default MatchSection;
