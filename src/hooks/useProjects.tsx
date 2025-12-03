import { useContext } from "react";
import { ProjectsContext } from "../providers/ProjectProvider";

export function useProjects() {
  const provider = useContext(ProjectsContext);

  if (!provider) {
    throw new Error("useProjects must be wrapped by ProjectProvider");
  }

  return { ...provider };
}