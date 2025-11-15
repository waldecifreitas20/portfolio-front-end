import type { Technology } from "../../@types/Technology";
import { Theme } from "../../shared/Theme";
import { ProgressBar } from "./ProgressBar";

interface TechViewItemProps {
  tech: Technology,
}

export function TechViewItem(props: TechViewItemProps) {
  const { tech } = props;
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
      </div>

      <ProgressBar
        max={100}
        value={50}
        fillColor={tech.isBackend ? Theme.primary : Theme.accent} />
    </li>
  );
}