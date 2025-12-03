import type { Language } from "../@types/Language";
import { useContext, useState } from "react";
import { StaticContentContext } from "../providers/StaticContentProvider";
import ptFlag from "../assets/pt-flag.png";
import enFlag from "../assets/en-flag.png";


const languages = [
  { label: 'pt', imgPath: ptFlag } as Language,
  { label: 'en', imgPath: enFlag } as Language,
]

export function useLanguage() {
  const contentProvider = useContext(StaticContentContext);
  const [activeLanguage, setActive] = useState<Language>(languages[0]);


  function switchTo(lang: Language) {
    setActive(lang);
    contentProvider.load(lang.label);
  }


  return {
    availableLanguages: [...Object.values(languages)],
    content: contentProvider.content,
    activeLanguage,
    switchTo,
  }
}