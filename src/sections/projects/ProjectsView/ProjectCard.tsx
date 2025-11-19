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
        relative z-0
        p-4 
        bg-(--bg-card)
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
      <a
        href={project.deploy}
        target="_blank"
        className="
        w-full h-50 
        relative rounded-lg 
        block overflow-hidden
        ">
        <img className="object-cover block min-h-50" src={project.previewUrl} alt={project.name} />
        <div
          className="
          size-full 
          hidden justify-center items-center 
          absolute inset-0 
          group-hover/card:flex
          bg-black/80
          z-30
          ">
          <Play size={50} color="#a42cd6" absoluteStrokeWidth />
        </div>
      </a>

      <div className="flex mt-4 text-white justify-between">
        <span>
          <p className="text-sm">{project.category}</p>
          <p className="font-bold">{project.name}</p>
        </span>

        <button
          className="
          cursor-pointer
          bg-(--primary) hover:bg-(--primary-hover) 
          h-fit 
          px-6 py-2 
          rounded-md
        ">{details}</button>
      </div>
    </div>
  );
}