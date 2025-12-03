import type { ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: "p-4" | "p-2";
  onClick?: () => void;
}

export function AnimatedButton(props: AnimatedButtonProps) {

  function handleClick() {
    if (!!props.onClick) {
      props.onClick();
    }
  }

  return (
    <motion.button
      initial={{
        background: `linear-gradient(-90deg, var(--accent) , var(--primary) 100%)`
      }}
      whileHover={{
        background: `linear-gradient(-90deg, var(--accent) , var(--primary) 0%)`,
      }}
      className={`block w-full shadow-md rounded-md font-normal cursor-pointer ${props.padding ?? "p-4"}`}
      onClick={handleClick}
    >{props.children}</motion.button>
  );
}