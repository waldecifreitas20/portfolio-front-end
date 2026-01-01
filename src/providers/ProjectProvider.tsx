import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { Api } from "@/api/api";
import type { Project } from "@/types/Project";
import type { Technology } from "@/types/Technology";
import type { DualLanguageField } from "../types/DualLanguageField";

export const ProjectsContext = createContext({
  getProjects: () => [] as Array<Project>,
  getTotal: () => Number(0),
  getProjectByTech: (_: Technology) => ({} as Project | undefined),
  getProjectsByTech: (_: Technology) => ([] as Array<Project>),
  getSkills: (_project: Project) => ([] as Array<DualLanguageField>),
});

export function ProjectProvider(props: PropsWithChildren) {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    Api.fetchProjects(data => {
      setProjects(data);
    });
  }, []);


  function getProjects() {
    return [...projects];
  }

  function getTotal() {
    return projects.length;
  }

  function getProjectsByTech(tech: Technology) {
    return projects.filter(project => {
      return project
        .technologies
        .some(technology => technology.name === tech.name);
    });
  }

  function getProjectByTech(tech: Technology) {
    return projects.find(project => {
      return project
        .technologies
        .some(technology => technology.name === tech.name);
    });
  }

  function getSkills(project: Project) {
    const skillsSet = new Set<DualLanguageField>();

    project.technologies.forEach(tech => {
      tech.skills.forEach(skill => {
        skillsSet.add(skill);
      });
    });

    return Array.from(skillsSet);
  }


  return (
    <ProjectsContext.Provider value={{
      getProjects,
      getTotal,
      getProjectByTech,
      getProjectsByTech,
      getSkills
    }}>
      {props.children}
    </ProjectsContext.Provider>
  );
}