import { TextAlignJustifyIcon } from "lucide-react";
import { sectionsId } from "../../shared/SectionsId";
import type { MenuOption } from "../../@types/MenuOption";
import { MenuOpt } from "./MenuOption";
import { motion } from "motion/react";
import { useState } from "react";


const menuOptions: Array<MenuOption> = [
  { label: 'Home', refTo: sectionsId.hero },
  { label: 'Sobre', refTo: sectionsId.about },
  { label: 'Habilidades', refTo: sectionsId.skills },
  { label: 'Projetos', refTo: sectionsId.projects },
  { label: 'Serviços', refTo: sectionsId.services },
  { label: 'Contato', refTo: sectionsId.contact },
];

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }


  return (
    <header className="text-white relative">
      <button onClick={openMenu}>
        <TextAlignJustifyIcon />
      </button>

      {isMenuOpen && (
        <div
          className="block w-screen h-screen fixed top-0"
          onClick={closeMenu}
        ></div>
      )}

      <motion.nav
        initial={{
          x: '-100%',
        }}
        animate={{
          x: isMenuOpen ? 0 : '-100%',
        }}
        transition={{ duration: 0.5 }}
        className={`
        fixed 
        top-0  
        z-50
        
        h-screen 
        w-[80%] max-w-[300px] 
        py-10 
        
        bg-black/50 
        
        `}>
        <ul>
          {menuOptions.map(opt => {
            return <MenuOpt option={opt} />
          })}
        </ul>
      </motion.nav>
    </header >
  );
}