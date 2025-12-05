import { useState } from "react";
import { motion } from "motion/react";
import { TextAlignJustifyIcon } from "lucide-react";

import type { Menu } from "@/types/Menu";

import { MenuOpt } from "./MenuOption";


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
      <button onClick={openMenu} className={`block ${isMenuOpen && 'opacity-0'}`} >
        <TextAlignJustifyIcon className="block size-8 overflow-hidden text-(var(--primary))" />
      </button>


      {isMenuOpen && (
        <div
          className="block w-screen h-screen fixed top-0 z-10"
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
         
        bg-(--bg-dark)/80
        backdrop-blur-xs
        `}>
        <ul>
          {options.map((opt, i) => {
            return (
              <MenuOpt
                key={`mobileopt${opt.refTo}${i}`}
                option={opt}
                onTap={closeMenu} />
            );
          })}
        </ul>
      </motion.nav>
    </>
  );
}