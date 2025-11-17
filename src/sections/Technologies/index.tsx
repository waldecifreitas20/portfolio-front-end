import { useContext, useState } from "react";
import type { Technology } from "../../@types/Technology";
import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import { Theme } from "../../shared/Theme";
import { TechnologiesView } from "./TechnologiesView";
import { List } from "../../components/List";
import { ColoredLabel } from "../../components/ColoredLabel";
import { ProjectsContext } from "../../providers/ProjectProvider";

export function Technologies() {
  const { title, details } = useLanguage().content.tech;
  const [selectedTech, setSelectedTech] = useState<Technology>();

  const projects = useContext(ProjectsContext);


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
          {selectedTech && (
            <article
              className="
              block border border-white/50 rounded-lg 
              h-max w-full
              text-white/70
              p-4
              ">
              <h3 className="text-xl text-white mb-4 size-10 flex gap-4 items-center">
                <img src={selectedTech.iconUrl} alt="" />
                {selectedTech.name}
              </h3>

              <p className="mb-2 text-sm">{selectedTech.description}</p>

              <div>
                <ColoredLabel
                  isBackend={selectedTech.isBackend}
                  textSize="text-base">
                  {details.skills}
                </ColoredLabel>
                <List items={selectedTech.skills} />
              </div>

              <div className="mt-4">
                <ColoredLabel
                  isBackend={selectedTech.isBackend}
                  textSize="text-base">
                  {details.projects}
                </ColoredLabel>
                <List items={projects.getAllByTech(selectedTech)} />
              </div>

            </article>
          )}
        </div>
      </ContentArea>
    </section >
  );
}