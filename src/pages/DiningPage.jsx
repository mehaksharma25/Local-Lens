import AppPromoBanner from "../components/AppPromoBanner";
import FeatureSection from "../components/FeatureSection";
import HeroDiningBanner from "../components/HeroDiningBanner";
import "./DiningPage.css";
import "./Home.css";

const features = [
  {
    icon: "⌕",
    title: "Discover",
    subtitle: "Find exactly where to eat",
    description: [
      "Browse curated restaurant lists",
      "Explore menus and photos",
      "Find restaurants by mood or cuisine",
    ],
    image: "/pics/dining/dining_signature_1777842810775.png",
    reverse: false,
  },
  {
    icon: "◷",
    title: "Book",
    subtitle: "Reserve the right table in seconds",
    description: [
      "See live slots across popular restaurants",
      "Choose tables for dates, groups, or celebrations",
      "Get priority access during peak hours",
    ],
    image: "/pics/dining/dining_peak_1777842823728.png",
    reverse: true,
  },
  {
    icon: "◇",
    title: "Pay",
    subtitle: "Settle the bill without the wait",
    description: [
      "Pay securely from your table",
      "Apply dining offers before checkout",
      "Keep receipts and rewards in one place",
    ],
    image: "/pics/dining/dining_on_house_1777842839770.png",
    reverse: false,
  },
];

function DiningPage() {
  return (
    <div className="dining-page">
      <HeroDiningBanner />

      <div className="dining-page-shell">
        <div className="dining-features">
          {features.map((feature) => (
            <FeatureSection key={feature.title} {...feature} />
          ))}
        </div>

        <AppPromoBanner />
      </div>


    </div>
  );
}

export default DiningPage;
