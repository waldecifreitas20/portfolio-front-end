
import type { MenuOption } from "./MenuOption";

export type StaticContent = {
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
  tech: {
    title: string,
    details: {
      skills: string,
      projects: string
    }
  }
}