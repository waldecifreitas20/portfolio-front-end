import { useState } from "react";
import type { Technology } from "../../@types/Technology";
import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import { Theme } from "../../shared/Theme";
import { TechnologiesView } from "./TechnologiesView/TechnologiesView";
import { TechnologyDetails } from "./TechDetails";

export function TechnologiesSection() {
  const { title } = useLanguage().content.tech;
  const [selectedTech, setSelectedTech] = useState<Technology>();

  function handleSelection(tech: Technology) {
    setSelectedTech(tech);
  }

  return (
    <section
      className="py-10"
      style={{
        background: `linear-gradient(
        ${Theme.background.bgDark}, 
        ${Theme.background.bgDarker})`
      }}>
      <ContentArea>
        <SectionTitle text={title} />
        <div className="md:flex gap-4">
          <TechnologiesView onSelectedTech={handleSelection} />
          {selectedTech && <TechnologyDetails technology={selectedTech} />}
        </div>
      </ContentArea>
    </section >
  );
}