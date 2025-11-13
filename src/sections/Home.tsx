  import { ContentArea } from "../components/ContentArea";
  import mobileBackground from "../assets/bg-hero-mobile.jpg";
  import { Menu } from "../components/Menu";
  import { useLanguage } from "../hooks/useLanguage";
  import { Theme } from "../shared/Theme";
  import { Button } from "../components/Button";
  import { FlatButton } from "../components/FlatButton";
  import { DesktopBackground } from "../components/DesktopBackground";
import { SocialsMedia } from "../components/SocialsMedia";

  export function HomeSection() {
    const { content } = useLanguage();
    const { hero } = content;

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
          
          <section className="text-white font-bold text-center mt-20">
            <SocialsMedia />
            <article>
              <p className="text-2xl" style={{
                color: Theme.accent
              }}>{hero.title}</p>
              <h1 className="text-5xl mt-2 mb-4">Waldeci Freitas</h1>
              <p className="font-normal text-white/70">{hero.intro}</p>
            </article>

            <article
              className="
              flex flex-col 
              gap-4 my-8 
              
              md:flex-row 
              md:max-w-[450px] 
              md:mx-auto
              
              ">
              <Button>{hero.buttons.projects}</Button>
              <FlatButton>{hero.buttons.contact}</FlatButton>
            </article>

          </section>

        </ContentArea>
      </section>
    );
  }