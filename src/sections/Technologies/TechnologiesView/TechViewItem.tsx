import { useContext } from "react";
import type { Technology } from "../../../@types/Technology";
import { Theme } from "../../../shared/Theme";
import { ProgressBar } from "./ProgressBar";
import { ProjectsContext } from "../../../providers/ProjectProvider";

interface TechViewItemProps {
  tech: Technology,
  onClick: (tech: Technology) => void;
}

export function TechViewItem(props: TechViewItemProps) {
  const { tech } = props;
  const projectProvider = useContext(ProjectsContext);

  const percentOfUse = calculatePercentOfUse();

  function calculatePercentOfUse() {
    const totalProjects = projectProvider.getTotal();
    const appearances = projectProvider.getAllByTech(tech).length;

    return Math.round(appearances / totalProjects * 100);
  }



  return (
    <li
      className="
      cursor-pointer
      block w-full 
      hover:bg-white/10 hover:px-4 pt-4 pb-2
      active:scale-[0.98]
      rounded-lg
      transition-all duration-300 select-none
      "
      onClick={() => props.onClick(props.tech)}
    >
      <div className="flex w-full gap-5 mb-2 ">
        <img className="size-10" src={tech.iconUrl} alt={tech.name} />
        <p className="text-white text-lg">{tech.name}</p>

        <p className="text-white/50 text-xs ml-auto">{percentOfUse}%</p>
      </div>

      <ProgressBar
        max={100}
        value={percentOfUse}
        fillColor={tech.isBackend ? Theme.primary : Theme.accent} />
    </li>
  );
}