import { Button } from "../../components/Button";
import { FlatButton } from "../../components/FlatButton";
import { SocialsMedia } from "../../components/SocialsMedia";
import { useLanguage } from "../../hooks/useLanguage";

export function HeroText() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section
      className="
            text-white font-bold text-center 
            mt-20 mx-auto
              
            lg:text-left
            lg:m-0
            ">
      <SocialsMedia />

      <article>
        <p className="text-2xl text-[var(--title)]" >{hero.title}</p>
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

              lg:mx-0
              lg:mr-auto
              
              ">
        <Button>{hero.buttons.projects}</Button>
        <FlatButton>{hero.buttons.contact}</FlatButton>
      </article>

    </section>
  );
}