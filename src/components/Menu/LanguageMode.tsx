import { useContext, useState } from "react";
import { LanguageContext } from "../../providers/LanguageProvider";
import type { Language } from "../../@types/Language";

export function LanguageMode() {
  const languages = useContext(LanguageContext);
  const [activeLanguage, setActive] = useState(languages.getCurrent());

  const activeClass = 'border-red-400';

  function handleClick(lang: Language) {
    setActive(lang);
  }

  return (
    <div className="flex h-full">
      {languages.getAll().map(lang => {
        return (
          <button
            onClick={() => handleClick(lang)}>
            <img
              className={`
                block
                border-2 
                h-10
                rounded-full 
                ${activeLanguage.label === lang.label ? activeClass : 'border-transparent'}`}
              src={lang.imgPath}
              alt={lang.label}
            />
          </button>
        );
      })}
    </div>
  );
}