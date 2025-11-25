import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  role: "primary" | "accent";
}

export function Button(props: ButtonProps) {
  const bgColor = `bg-(--${props.role})`.toString();
  const bgColorHover = `hover:bg-(--${props.role}-hover)`.toString();

  return (
    <button
      className={`
      p-2 
      ${bgColor}  ${bgColorHover}
      block w-full 
      shadow-md rounded-md 
      font-normal cursor-pointer  
      `}
      {...props}
    >{props.children}</button>
  );
}