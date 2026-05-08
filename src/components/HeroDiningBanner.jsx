const categories = ["Fine dining", "Rooftops", "Date night", "Family tables"];

function HeroDiningBanner() {
  return (
    <section className="dining-hero">
      <div className="dining-hero-shell">
        <h1 className="dining-hero-title">
          Discover restaurants, explore menus,
          <br />
          book tables, pay bill - all in one place
        </h1>

        <div className="dining-hero-card">
          <div className="dining-hero-card-content">
            <span className="dining-hero-kicker">Local Lens Dining</span>
            <h2>Reserve the table everyone wants.</h2>
            <p>
              Curated places, live availability, signature offers, and a calmer
              way to plan the perfect meal.
            </p>

            <div className="dining-hero-search">
              <span aria-hidden="true">🔍</span>
              <input type="text" placeholder="Search restaurants, cuisines, moods" />
              <button type="button">Search</button>
            </div>

            <div className="dining-category-row">
              {categories.map((category) => (
                <button type="button" key={category} className="dining-category-chip">
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="dining-hero-visual" aria-hidden="true">
            <div className="dining-offer-card offer-primary">
              <img
                src="/pics/dining/dining_signature_1777842810775.png"
                alt=""
              />
              <span>Chef's tasting menus</span>
            </div>
            <div className="dining-offer-card offer-secondary">
              <img src="/pics/dining/dining_peak_1777842823728.png" alt="" />
              <span>Peak-hour access</span>
            </div>
            <div className="dining-floating-pill">Up to 25% off today</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDiningBanner;
