import type { Skill } from "./Skill";
import type { Technology } from "./Technology";

export type Project = {
  id: any,
  name: string,
  previewUrl: string,
  category: string,
  description: string,
  repository: string,
  deploy: string,
  technologies: Array<Technology>,
  usedSkills: Array<Skill>
}