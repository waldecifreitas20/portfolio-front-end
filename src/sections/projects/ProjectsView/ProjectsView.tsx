
import { memo } from "react";
import type { Project } from "../../../@types/Project";
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";


interface ProjectsViewProps {
  onSeeDetails: (project: Project) => void;
}

export const ProjectsView = memo(function (props: ProjectsViewProps) {
  const { getProjects } = useProjects();

  return (
    <ul
      className="
      flex flex-col gap-8
      justify-center
      sm:grid
      sm:grid-cols-2
      
      lg:grid-cols-3
      ">
      {
        getProjects()
          .map((project, i) => {
            return <ProjectCard
              key={`proj_${i}-${project.id}`}
              project={project}
              onClickSeeMore={props.onSeeDetails}
            />;
          })}
    </ul>
  );
})
