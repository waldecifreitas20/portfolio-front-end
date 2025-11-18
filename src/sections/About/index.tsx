import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
export function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section className="text-white/70 py-10 bg-[var(--bg-light)]">
      <ContentArea>
        <SectionTitle text={about.title} />

        {about.text.map(paragraph => {
          return <p className="my-5 text-justify">{paragraph}</p>
        })}
      </ContentArea>
    </section>
  );
}