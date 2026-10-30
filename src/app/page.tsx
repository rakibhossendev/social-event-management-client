import Gallery from "./components/Home/Gallery/Gallery";
import HeroSection from "./components/Home/HeroSction/Banner";
import Newsletter from "./components/Home/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <HeroSection/>

      <Gallery/>

      <Newsletter/>
    </div>
  );
}
