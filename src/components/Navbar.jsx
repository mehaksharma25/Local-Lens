import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [city, setCity] = useState("Gurugram");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cities = ["Gurugram", "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { path: "/", label: "For you" },
    { path: "/#dining", label: "Dining" },
    { path: "/#movies", label: "Movies" },
    { path: "/#events", label: "Events" },
    { path: "/#ipl", label: "IPL" },
  ];

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-text">Local Lens</span>
        </Link>

        <div className="navbar-city" id="navbar-city" ref={dropdownRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span className="city-icon">📍</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="city-name" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {city} <span style={{ fontSize: '0.6rem' }}>▼</span>
            </span>
          </div>

          {isDropdownOpen && (
            <div className="city-dropdown">
              <div className="city-dropdown-header">Select your city</div>
              <ul className="city-list">
                {cities.map((c) => (
                  <li 
                    key={c} 
                    className={city === c ? "active" : ""}
                    onClick={() => setCity(c)}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ul className="navbar-links" id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.path}
                className={
                  "nav-link" +
                  (location.pathname === link.path ? " active" : "")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-search" id="navbar-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search events, movies & more..."
            className="search-input"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
