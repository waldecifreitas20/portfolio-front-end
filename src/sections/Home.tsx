import { ContentArea } from "../components/ContentArea";
import { Menu } from "../components/Menu";
import { DesktopBackground } from "../components/DesktopBackground";
import mobileBackground from "../assets/bg-hero-mobile.jpg";
import { HeroText } from "./HeroText";
import heroBanner from "../assets/hero-laptop.png";

export function HomeSection() {
  return (
    <section
      className="h-screen w-full overflow-hidden relative"
      style={{
        background: `url(${mobileBackground}) no-repeat top center`,
        backgroundSize: 'cover',
      }}>
      <DesktopBackground />
      <ContentArea tailwindCss="py-2 relative z-10">
        <Menu />

        <div className="flex items-center  lg:mt-20">
          <HeroText />
          <img className=" w-1/2 h-full" src={heroBanner} alt="banner" />
        </div>
      </ContentArea>
    </section>
  );
}