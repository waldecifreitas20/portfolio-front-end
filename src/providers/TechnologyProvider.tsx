import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { Api } from "../api/api";
import type { Project } from "../@types/Project";
import type { Technology } from "../@types/Technology";

export const ProjectsContext = createContext({
  getProjects: () => [] as Array<Project>,
  getTotal: () => Number(0),
  getProjectsByTech: (tech: Technology) => [] as Array<Project>,
});

export function ProjectProvider(props: PropsWithChildren) {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    Api.fetchProjects(setProjects);
  }, []);


  function getProjects() {
    return [...projects];
  }

  function getTotal() {
    return projects.length;
  }

  function getProjectsByTech(tech: Technology) {
    const projectsWithTech = [];

    for (const project of projects) {
      for (const projTech of project.technologies) {
        if (projTech.name == tech.name) {

          projectsWithTech.push(project);
        }
      }
    }
    return projectsWithTech;
  }



  return (
    <ProjectsContext.Provider value={{
      getProjects,
      getTotal,
      getProjectsByTech
    }}>
      {props.children}
    </ProjectsContext.Provider>
  );
}