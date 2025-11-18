import { MobileMenu } from "./Mobile";
import { LanguageMode } from "./LanguageMode";
import { useLanguage } from "../../../hooks/useLanguage";
import { DesktopMenu } from "./DesktopMenu";
import { useBreakpoint } from "../../../hooks/useBreakpoint";


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