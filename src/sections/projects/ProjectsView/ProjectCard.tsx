import { Play } from "lucide-react";

import { useLanguage } from "@hooks/useLanguage";

import type { Project } from "@/types/Project";

import { AnimatedButton } from "@components/AnimatedButton";
import { Card } from "@components/Card";

interface ProjectCardProps {
  project: Project;
  onClickSeeMore: (project: Project) => void;
}


export function ProjectCard(props: ProjectCardProps) {
  const { details } = useLanguage().content.projects.buttons;
  const { project, onClickSeeMore } = props;

  function handleClick() {
    onClickSeeMore(project);
  }

  return (
    <Card enableHover style={`relative z-0  group/card`}>
      <a
        href={project.deployUrl}
        target="_blank"
        className="
        w-full h-50 
        relative rounded-lg 
        block overflow-hidden
        ">
        <img className="object-cover block min-h-50" src={project.thumbnailUrl} alt={project.name} />
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

        <div className="w-[150px] sm:w-[100px]">
          <AnimatedButton onClick={handleClick} padding="p-2">{details}</AnimatedButton>
        </div>
      </div>
    </Card>
  );
}