import IPLHeaderBanner from "../components/IPLHeaderBanner";
import MatchSection from "../components/MatchSection";
import iplMatches from "../data/iplMatches";
import "./IPLPage.css";
import "./Home.css";

function IPLPage() {
  const liveMatches = iplMatches.filter((match) => match.status === "live");
  const upcomingMatches = iplMatches.filter((match) => match.status === "upcoming");

  return (
    <div className="ipl-page" id="ipl-page">
      <div className="ipl-page-shell">
        <IPLHeaderBanner />

        <div className="ipl-sections">
          <MatchSection title="Tickets on sale" matches={liveMatches} />
          <MatchSection title="Upcoming" matches={upcomingMatches} />
        </div>
      </div>

      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Local Lens</span>
          </div>

          <div className="footer-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">List your events</a>
          </div>

          <div className="footer-app">
            <div className="qr-placeholder">QR Code</div>
            <p>Scan to download the app</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            By accessing this page, you confirm that you have read, understood,
            and agreed to our Terms of Service, Cookie Policy, Privacy Policy,
            and Content Guidelines. All rights reserved.
          </p>
          <div className="social-icons">
            <span>WA</span>
            <span>FB</span>
            <span>IG</span>
            <span>X</span>
            <span>YT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default IPLPage;
