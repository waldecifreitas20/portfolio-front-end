
import type { Language } from "@/types/Language";
import { useLanguage } from "@hooks/useLanguage";


export function LanguageMode() {
  const { activeLanguage, switchTo, availableLanguages } = useLanguage();

  const activeClass = 'border-red-400';

  function handleClick(lang: Language) {
    switchTo(lang);

  }

  return (
    <div className="flex h-full gap-2 absolute z-0 right-0 top-0">
      {availableLanguages.map((lang, i) => {
        return (
          <button
            key={`lang-${i}${lang.label}`}
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