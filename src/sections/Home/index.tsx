import { ContentArea } from "@components/ContentArea";
import { DesktopBackground } from "@components/DesktopBackground";

import mobileBackground from "@assets/bg-hero-mobile.jpg";
import heroBanner from "@assets/hero-laptop.png";

import { HeroText } from "./HeroText";
import { Header } from "./Header";

export function HomeSection() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full overflow-hidden relative bg-cover bg-no-repeat bg-top"
      style={{ background: `url(${mobileBackground})`, }}>

      <DesktopBackground />

      <ContentArea tailwindCss="py-2 lg:py-4 relative z-10">
        <Header />

        <div className="flex items-center lg:mt-20">
          <HeroText />
          <img className="hidden lg:block w-1/2 h-full" src={heroBanner} alt="banner" />
        </div>
      </ContentArea>
    </section>
  );
}