import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  enableHover?: boolean;
  style?: string;
}

export function Card(props: CardProps) {
  return (
    <div
      className={`
        p-4 
        bg-(--bg-card)
        border 
        rounded-xl
        border-(--primary)/20
        ${props.enableHover && ("hover:shadow-purple-950/50 hover:border-(--primary)")}
        
        transition-all duration-100
        shadow-lg
        sm:max-w-[400px]

        ${props.style ?? ""}
        `}>
      {props.children}
    </div>
  );
}