import type { Language } from "../@types/Language";
import { createContext, useState, type PropsWithChildren } from "react";
import enFlag from "../assets/en-flag.png";
import ptFlag from "../assets/pt-flag.png";


export const LanguageContext = createContext({
  getCurrent: () => ({ label: '', imgPath: '' }),
  setCurrent: (label: string) => { },
  getAll: () => LANGUAGES,
});

const LANGUAGES: Array<Language> = [
  { label: 'pt', imgPath: ptFlag },
  { label: 'en', imgPath: enFlag },
];

export function LanguageProvider(props: PropsWithChildren) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(LANGUAGES[0]);

  function getAll() {
    return [...LANGUAGES];
  }

  function getCurrent() {
    return currentLanguage;
  }

  function setCurrent(label: string) {
    const language = LANGUAGES.find(lang => lang.label === label);
    if (!language) {
      throw new Error("Language does not exist");
    }

    setCurrentLanguage(language);
  }

  return (
    <LanguageContext.Provider value={{
      setCurrent,
      getCurrent,
      getAll,
    }}>
      {props.children}
    </LanguageContext.Provider>

  );

}