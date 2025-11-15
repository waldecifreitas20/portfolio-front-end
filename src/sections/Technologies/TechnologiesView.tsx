import { useEffect, useState } from "react";
import { Theme } from "../../shared/Theme";
import { Tab } from "./Tab";
import { Api } from "../../api/api";
import { TechViewItem } from "./TechViewItem";
import type { Technology } from "../../@types/Technology";

enum tabs {
  frontend, backend
}

export function TechnologiesView() {
  const [activeTab, setActiveTab] = useState(tabs.frontend);
  const [techs, setTechs] = useState({
    backend: [] as Array<Technology>,
    frontend: [] as Array<Technology>,
  });


  useEffect(() => {
    Api
      .fetchData()
      .then(data => {
        const { technologies } = data;
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
    <div>
      {/*controlers */}
      <article className="flex">
        <Tab
          id={tabs.frontend}
          activeColor={Theme.accent}
          isActive={activeTab === tabs.frontend}
          text="Front-end"
          onClick={handleTabClick}
        />
        <Tab
          id={tabs.backend}
          activeColor={Theme.primary}
          isActive={activeTab === tabs.backend}
          text="Back-end"
          onClick={handleTabClick}
        />
      </article>

      <ul>
        {getSelectedTechs().map(tech => {
          return <TechViewItem tech={tech} />
        })}
      </ul>

    </div>
  );
}