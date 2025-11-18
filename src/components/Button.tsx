import type { ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string,
}

export function Button(props: ButtonProps) {

  return (
    <motion.button
      initial={{
        background: `linear-gradient(-90deg, var(--accent) , var(--primary) 100%)`
      }}
      whileHover={{
        background: `linear-gradient(-90deg, var(--accent) , var(--primary) 0%)`,
      }}
      className="p-4 block w-full shadow-md rounded-md font-normal cursor-pointer"

    >{props.children}</motion.button>
  );
}