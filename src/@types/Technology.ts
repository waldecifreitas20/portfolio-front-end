import type { Skill } from "./Skill"

export type Technology = {
  id: string,
  name: string,
  iconUrl: string,
  description: string,
  isBackend?: boolean,
  skills: Array<Skill>,
  color: string,
}