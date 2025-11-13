import type { MenuOption } from "./MenuOption"
import type { Project } from "./Project"
import type { Technology } from "./Tecnology"

export type Content = {
  menu: {
    options: Array<MenuOption>
  },
  hero: {
    title: string,
    intro: string,
    buttons: {
      projects: string,
      contact: string
    }
  },
  about: {
    title: string,
    text: Array<string>
  },
  skills: {
    title: string,
    technologies: Array<Technology>
  },
  portfolio: {
    title: string,
    projects: Array<Project>
  }
}