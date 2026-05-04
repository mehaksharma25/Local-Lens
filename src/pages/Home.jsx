import events from "../data/events";
import artists from "../data/artists";
import SectionRow from "../components/SectionRow";
import ArtistRow from "../components/ArtistRow";
import "./Home.css";

function Home() {
  const iplEvents = events.filter((e) => e.category === "ipl");
  const movieEvents = events.filter((e) => e.category === "movie");
  const nightlifeEvents = events.filter((e) => e.category === "event");

  return (
    <div className="home" id="home-page">

      <div className="sections-wrapper top-sections">
        <SectionRow
          title="TATA IPL 2026"
          events={iplEvents}
          id="ipl"
        />
        <SectionRow
          title="Top Hindi & English movies near you"
          events={movieEvents}
          id="movies"
        />
        <ArtistRow 
          title="Artists in your Local Lens"
          artists={artists}
        />
      </div>

      <section className="dining-section" id="dining">
        <div className="dining-container">
          <div className="dining-header-box">
            <h2>Discover restaurants, explore menus, book tables - all in one place</h2>
            <div className="dining-search">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search for a restaurant name" />
            </div>
          </div>

          <div className="dining-specials">
            <h3 className="dining-subheading">Enjoy iconic Local Lens specials</h3>
            <div className="polaroid-grid">
              
              <div className="polaroid-card">
                <h4>Signature packages</h4>
                <p>Curated menus & selections across the best spots in town</p>
                <div className="polaroid-frame p-left">
                  <img src="/pics/dining/dining_signature_1777842810775.png" alt="Signature packages" />
                  <div className="tape"></div>
                </div>
              </div>

              <div className="polaroid-card">
                <h4>Peak hour booking</h4>
                <p>Skip the queue - priority entry at top restaurants</p>
                <div className="polaroid-frame p-center">
                  <img src="/pics/dining/dining_peak_1777842823728.png" alt="Peak hour booking" />
                  <div className="tape"></div>
                </div>
              </div>

              <div className="polaroid-card">
                <h4>On-the-house</h4>
                <p>Complimentary delights along with your favourite meals</p>
                <div className="polaroid-frame p-right">
                  <img src="/pics/dining/dining_on_house_1777842839770.png" alt="On-the-house" />
                  <div className="tape"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="sections-wrapper">
        <SectionRow
          title="Best of nightlife"
          events={nightlifeEvents}
          id="events"
        />
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
          <p>By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
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

export default Home;
