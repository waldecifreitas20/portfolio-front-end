import { useContext, useMemo } from "react";
import type { Technology } from "../../@types/Technology";
import { Theme } from "../../shared/Theme";
import { ProgressBar } from "./ProgressBar";
import { ProjectsContext } from "../../providers/TechnologyProvider";

interface TechViewItemProps {
  tech: Technology,
}

export function TechViewItem(props: TechViewItemProps) {
  const { tech } = props;
  const projectProvider = useContext(ProjectsContext);

  const percentOfUse = calculatePercentOfUse();

  function calculatePercentOfUse() {
    const totalProjects = projectProvider.getTotal();
    const appearances = projectProvider.getProjectsByTech(tech).length;

    return appearances / totalProjects * 100;
  }



  return (
    <li
      className="
      cursor-pointer
      block w-full 
      hover:bg-white/10 hover:px-4 pt-4 pb-2
      active:scale-95
      rounded-lg
      transition-all duration-300
      ">
      <div className="flex gap-4 mb-2">
        <img className="size-10" src={tech.iconUrl} alt={tech.name} />
        <p className="text-white text-lg select-none">{tech.name}</p>

        <p>{percentOfUse}%</p>
      </div>

      <ProgressBar
        max={100}
        value={percentOfUse}
        fillColor={tech.isBackend ? Theme.primary : Theme.accent} />
    </li>
  );
}