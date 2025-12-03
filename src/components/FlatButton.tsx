import type { ButtonHTMLAttributes } from "react";

interface FlatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function FlatButton(props: FlatButtonProps) {
  return (
    <button
      {...props}
      className="
      cursor-pointer
      border border-white/50 text-white/80
      py-4 px-4 
      block 
      w-full 
      rounded-md 
      font-normal 
      bg-white/5 hover:bg-white/20"

    >{props.children}</button>
  );
}