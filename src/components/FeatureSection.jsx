function FeatureSection({ icon, title, subtitle, description, image, reverse = false }) {
  return (
    <section className={`dining-feature ${reverse ? "is-reversed" : ""}`}>
      <div className="dining-feature-image-wrap">
        <img src={image} alt={`${title} dining preview`} className="dining-feature-image" />
      </div>

      <div className="dining-feature-content">
        <div className="dining-feature-icon" aria-hidden="true">
          {icon}
        </div>
        <h2>{title}</h2>
        <p className="dining-feature-subtitle">{subtitle}</p>

        <ul className="dining-feature-list">
          {description.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection;
