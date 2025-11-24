import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";

export function ServicesSection() {
  const {} = useLanguage().content.services;
  
  return (
    <section>
      <SectionTitle text=""/>
    </section>
  );
}