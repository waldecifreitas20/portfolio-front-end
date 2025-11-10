import { ContentArea } from "../components/ContentArea";
import mobileBackground from "../assets/bg-hero-mobile.svg";
import { Menu } from "../components/Menu";


export function HeroSection() {
  return (
    <section
      className="border h-screen"
      style={{
        background: `url(${mobileBackground}) no-repeat top center`,
        backgroundSize: 'cover',
      }}>
      <ContentArea>
        <Menu />
      </ContentArea>
    </section>
  );
}