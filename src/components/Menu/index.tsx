import { sectionsId } from "../../shared/SectionsId";
import type { MenuOption } from "../../@types/MenuOption";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "./Mobile";
import { LanguageMode } from "./LanguageMode";
import { ContentArea } from "../ContentArea";

const menuOptions: Array<MenuOption> = [
  { label: 'Inicio', refTo: sectionsId.hero },
  { label: 'Sobre', refTo: sectionsId.about },
  { label: 'Habilidades', refTo: sectionsId.skills },
  { label: 'Projetos', refTo: sectionsId.projects },
  { label: 'Serviços', refTo: sectionsId.services },
  { label: 'Contato', refTo: sectionsId.contact },
];



export function Menu() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ContentArea tailwindCss="py-2">
      <header className="text-white relative flex items-center justify-between">
        {isMobile && <MobileMenu options={menuOptions} />}

        <LanguageMode />
      </header >
    </ContentArea>
  );
}