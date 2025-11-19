import { useLanguage } from "../../../hooks/useLanguage";
import type { Project } from "../../../@types/Project";
import { Play } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}


export function ProjectCard(props: ProjectCardProps) {
  const { details } = useLanguage().content.projects.buttons;
  const { project } = props;

  return (
    <div
      className={`
        p-4 
        bg-(--bg-card)
        cursor-pointer
        border 
        rounded-xl
        border-(--primary)/20
        hover:border-(--primary)
        
        transition-all duration-100
        shadow-lg
        hover:shadow-purple-950/50
        group/card
        sm:max-w-[400px]
        
        `}>
      <div
        className="
        w-full h-50 
        relative rounded-lg 
        block overflow-hidden
        ">
        <img className="" src={project.previewUrl} alt={project.name} />
        <div
          className="
          size-full 
          hidden justify-center items-center 
          absolute inset-0 
          group-hover/card:flex
          bg-black/80
          ">
          <Play size={50} color="#a42cd6" absoluteStrokeWidth />
        </div>
      </div>

      <div className="flex mt-4 text-white justify-between">
        <span>
          <p className="text-sm">{project.category}</p>
          <p className="font-bold">{project.name}</p>
        </span>

        <button
          className="
          cursor-pointer
          bg-(--primary) hover:bg-(--primary)/80 
          h-fit 
          px-6 py-2 
          rounded-md
        ">{details}</button>
      </div>
    </div >
  );
}