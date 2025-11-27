
import type { MenuOption } from "./MenuOption";
import type { Service } from "./Service";

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
  },

  projects: {
    title: string,
    buttons: {
      close: string,
      repository: string,
      deploy: string,
      details: string,
    },
    concepts: string,
  },

  services: {
    title: string,
    cards: Array<Service>,
    buttonCta: string,
  },
  contact: {
    title: string,
    subtitle: string,
    inputsLabels: {
      name: string,
      subject: string,
      subjectChoices: Array<string>,
      message: string,
    },
    buttonSend: string
  }
}