
import { memo } from "react";
import type { Project } from "../../../@types/Project";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";


interface ProjectsViewProps {
  onSeeDetails: (project: Project) => void;
  shrink: boolean
}

export const ProjectsView = memo(function (props: ProjectsViewProps) {
  const { getProjects } = useProjects();

  const responsibleClasses = `md:grid-cols-2 lg:grid-cols-3`;
  const classesOnShrink = ` md:grid-cols-1 lg:grid-cols-2`;


  return (
    <ul
      className={`
      flex gap-4
      flex-wrap
      justify-center
 
      md:grid
      
      ${props.shrink ? classesOnShrink : responsibleClasses}
        `}>
      {
        getProjects()
          .map((project, i) => {
            return <ProjectCard
              key={`proj_${i}-${project.id}`}
              project={project}
              onClickSeeMore={props.onSeeDetails}
            />;
          })}
    </ul >
  );
})
