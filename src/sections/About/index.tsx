import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
export function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section className="text-white/70 py-10 bg-(--bg-light)">
      <ContentArea>
        <SectionTitle text={about.title} />

        {about.text.map((paragraph, i) => {
          return <p key={`p-${about.title.length}$${i}`} className="my-5 text-justify">{paragraph}</p>
        })}
      </ContentArea>
    </section>
  );
}