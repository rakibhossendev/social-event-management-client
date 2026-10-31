import Gallery from "./components/Home/Gallery/Gallery";
import HeroSection from "./components/Home/HeroSction/Banner";
import Newsletter from "./components/Home/Newsletter/Newsletter";
import RecentEvent from "./components/Home/recent-event/recent-event";

export default function Home() {
  return (
    <div>
      <HeroSection/>

      <RecentEvent/>
      <Gallery/>

      <Newsletter/>
    </div>
  );
}
