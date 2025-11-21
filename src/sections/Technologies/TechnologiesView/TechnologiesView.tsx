import { useEffect, useState } from "react";
import { Tab } from "./Tab";
import { Api } from "../../../api/api";
import { TechViewItem } from "./TechViewItem";
import type { Technology } from "../../../@types/Technology";

enum tabs {
  frontend, backend
}

interface TechnologiesViewProps {
  onSelectedTech: (tech: Technology) => void;
}

export function TechnologiesView(props: TechnologiesViewProps) {
  const [activeTab, setActiveTab] = useState(tabs.frontend);
  const [techs, setTechs] = useState({
    backend: [] as Array<Technology>,
    frontend: [] as Array<Technology>,
  });


  useEffect(() => {
    Api
      .fetchTechnologies(technologies => {
        const backend = technologies.filter(tech => tech.isBackend);
        const frontend = technologies.filter(tech => !tech.isBackend);

        setTechs({ backend, frontend });
      });
  }, []);


  function handleTabClick(tabId: tabs) {
    setActiveTab(tabId);
  }

  function getSelectedTechs() {
    return activeTab === tabs.frontend ? techs.frontend : techs.backend;
  }

  return (
    <div className="w-full block">
      <article className="flex mb-4">
        <Tab
          id={tabs.frontend}
          activeColor={'var(--accent)'}
          isActive={activeTab === tabs.frontend}
          text="Front-end"
          onClick={handleTabClick}
        />
        <Tab
          id={tabs.backend}
          activeColor={'var(--primary)'}
          isActive={activeTab === tabs.backend}
          text="Back-end"
          onClick={handleTabClick}
        />
      </article>

      <ul>
        {getSelectedTechs().map(tech => {
          return (
            <TechViewItem
              key={`tech-${tech.id}`}
              tech={tech}
              onClick={props.onSelectedTech}
            />
          );
        })}
      </ul>

    </div>
  );
}