import { TextAlignJustifyIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import type { Menu } from "../../@types/Menu";
import { MenuOpt } from "./MenuOption";
import { Theme } from "../../shared/Theme";

interface MobileMenuProps extends Menu { }

export function MobileMenu(props: MobileMenuProps) {
  const { options } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>

      {/* OPENER */}
      <button onClick={openMenu} className={`block ${isMenuOpen && 'opacity-0' }`} >
        <TextAlignJustifyIcon className="block size-8 overflow-hidden" style={{
          color: Theme.primary
        }} />
      </button>


      {isMenuOpen && (
        <div
          className="block w-screen h-screen fixed top-0"
          onClick={closeMenu}
        ></div>
      )}

      {/* DRAWER */}
      <motion.nav
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: isMenuOpen ? 0 : '-100%',
        }}
        transition={{ duration: 0.3 }}
        className={`
        fixed 
        top-0  
        inset-x-0
        z-50

        h-screen
        w-[80%] max-w-[300px] 
        py-10 
        
        bg-black/50 
        `}>
        <ul>
          {options.map(opt => {
            return <MenuOpt option={opt} onTap={closeMenu} />
          })}
        </ul>
      </motion.nav>
    </>
  );
}