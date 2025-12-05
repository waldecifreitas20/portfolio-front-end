import { useState } from "react";
import type { Technology } from "@/types/Technology";
import { ContentArea } from "@components/ContentArea";
import { SectionTitle } from "@components/SectionTitle";
import { useLanguage } from "@hooks/useLanguage";
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
      id="skills"
      className="pt-10 pb-20 bg-linear-to-b from-(--bg-dark) to-(--bg-darker)">
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