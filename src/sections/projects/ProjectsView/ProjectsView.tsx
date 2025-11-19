
import { useProjects } from "../../../hooks/useProjects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsView() {
  const { getProjects } = useProjects();

  return (
    <ul className="flex flex-wrap justify-center items-center">
      {
        getProjects()
          .map((project, i) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
    </ul>
  );
}