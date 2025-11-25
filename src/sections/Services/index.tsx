import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";

export function ServicesSection() {
  const { title, buttonCta, cards } = useLanguage().content.services;

  return (
    <section
      id="services"
      className="pt-10 pb-20 bg-linear-to-b from-(--bg-darker) to-(--bg-dark)">
      <ContentArea>
        <SectionTitle text={title} />
        
      </ContentArea>
    </section >
  );
}