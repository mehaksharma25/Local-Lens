function AppPromoBanner() {
  return (
    <section className="dining-app-promo">
      <div className="dining-app-copy">
        <span className="dining-app-kicker">Local Lens app</span>
        <h2>The city's finest, in your pocket</h2>
        <p>
          Book tables, unlock dining privileges, and settle your bill from one
          polished little place.
        </p>

        <div className="dining-qr-row">
          <div className="dining-qr" aria-label="QR code placeholder">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <strong>Scan to download</strong>
            <small>Available for iOS and Android</small>
          </div>
        </div>
      </div>

      <div className="dining-phone-wrap" aria-hidden="true">
        <div className="dining-phone">
          <div className="dining-phone-speaker"></div>
          <img src="/pics/dining/dining_discount_1777842854268.png" alt="" />
          <div className="dining-phone-panel">
            <span>Tonight's pick</span>
            <strong>Lumina Table</strong>
            <small>2 seats · 8:30 PM</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromoBanner;
