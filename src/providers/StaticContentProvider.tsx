import { createContext, useState, type PropsWithChildren } from "react";
import ptContentJson from "../data/pt_br.json";
import enContentJson from "../data/en.json";
import type { LanguageLabel } from "../@types/Language";
import type {StaticContent } from "../@types/StaticContent";

export const StaticContentContext = createContext({
  load: (_languageLabel: LanguageLabel) => { },
  content: {} as StaticContent,
});

const CONTENTS = {
  en: enContentJson,
  pt: ptContentJson,
};

export function StaticContentProvider(props: PropsWithChildren) {
  const [content, setContent] = useState<StaticContent>(CONTENTS.pt);

  function load(languageLabel: LanguageLabel) {
    let selected = CONTENTS.pt;

    if (languageLabel === 'en') {
      selected = CONTENTS.en;
    }
    setContent(selected);
  }


  return (
    <StaticContentContext.Provider value={{
      content,
      load,
    }}>
      {props.children}
    </StaticContentContext.Provider>
  );
}