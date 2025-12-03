import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  accent?: boolean;
  onClick?: () => void;
  style?: string;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const buttonColors = props.accent ?
    (`bg-(--accent) ${!props.disabled && 'hover:bg-(--accent-hover)'}`) :
    (`bg-(--primary) ${!props.disabled && 'hover:bg-(--primary-hover)'}`);


  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <button
      className={`
      p-2 
      ${buttonColors}
      block w-full 
      shadow-md rounded-md 
      ${props.disabled ? "cursor-not-allowed opacity-30" : "cursor-pointer "} 

      ${props.style ?? ''}
      `}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
}