import { useLanguage } from "@hooks/useLanguage";
import { useBreakpoint } from "@hooks/useBreakpoint";


import { LanguageMode } from "./LanguageMode";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./Mobile";

export function Header() {
  const { isMobile } = useBreakpoint(767);
  const { content } = useLanguage();

  return (
    <header
      className="
      text-white relative flex items-center justify-between 
      md:justify-center
      ">
      {isMobile && <MobileMenu options={content.menu.options} />}
      {!isMobile && <DesktopMenu options={content.menu.options} />}

      <LanguageMode />
    </header >
  );
}