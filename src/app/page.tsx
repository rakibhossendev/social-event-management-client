import FeaturedSection from "./components/Home/Featured/page";
import Gallery from "./components/Home/Gallery/Gallery";
import HeroSection from "./components/Home/HeroSection/Banner";
import Newsletter from "./components/Home/Newsletter/Newsletter";
import RecentEvent from "./components/Home/recent-event/recent-event";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedSection/>
      <RecentEvent/>
      <Gallery/>

      <Newsletter/>
      
    </div>
  );
}
