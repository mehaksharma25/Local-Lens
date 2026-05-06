const leagueTeams = [
  { name: "Delhi Capitals", short: "DC" },
  { name: "Chennai Super Kings", short: "CSK" },
  { name: "Mumbai Indians", short: "MI" },
  { name: "Royal Challengers Bengaluru", short: "RCB" },
  { name: "Kolkata Knight Riders", short: "KKR" },
];

const partnerTeams = [
  { name: "Sunrisers Hyderabad", short: "SRH" },
  { name: "Rajasthan Royals", short: "RR" },
  { name: "Gujarat Titans", short: "GT" },
];

function IPLHeaderBanner() {
  return (
    <section className="ipl-banner">
      <div className="ipl-banner-shell">
        <div className="ipl-banner-main">
          <p className="ipl-banner-kicker">Live stadium experiences</p>
          <h1 className="ipl-banner-title">TATA IPL 2026</h1>
          <p className="ipl-banner-subtitle">Ultimate Cricket Battle Begins!</p>

          <div className="ipl-banner-team-row">
            {leagueTeams.map((team) => (
              <div key={team.name} className="ipl-team-chip">
                <span className="ipl-team-chip-logo">{team.short}</span>
                <span className="ipl-team-chip-name">{team.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ipl-banner-partner">
          <p className="ipl-banner-partner-text">Exclusive ticketing partner for</p>
          <div className="ipl-banner-partner-logos">
            {partnerTeams.map((team) => (
              <div key={team.name} className="ipl-partner-badge" aria-label={team.name}>
                {team.short}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IPLHeaderBanner;
