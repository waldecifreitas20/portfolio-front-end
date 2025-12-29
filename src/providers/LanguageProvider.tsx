import type { Language } from "@/types/Language";
import { createContext, useState, type PropsWithChildren } from "react";



const LANGUAGES = {
  en: 'en' as Language,
  pt: 'pt' as Language,
}

export const LanguageContext = createContext({
  getCurrent: () => 'en' as Language,
  switchTo: (_lang: Language) => { },
  languages: { ...LANGUAGES }
});


export function LanguageProvider(props: PropsWithChildren) {
  const [current, setCurrent] = useState<Language>(LANGUAGES.pt);

  function getCurrent(): Language {
    return current;
  }

  function switchTo(lang: Language) {
    setCurrent(lang);
  }

  return (
    <LanguageContext value={{
      getCurrent,
      switchTo,
      languages: { ...LANGUAGES },
    }}>
      {props.children}
    </LanguageContext>
  );
}