import type { PropsWithChildren } from "react";

interface ImageContainerProps extends PropsWithChildren {
  src: string;
  useOverlay?: boolean;
  height?: number;
}


export function ImageContainer(props: ImageContainerProps) {
  return (
    <div
      className={`
      h-50 w-full 
      relative rounded-lg 
      block overflow-hidden
      `}>
      <img
        className="object-cover block min-h-50" src={props.src} />
      {props.useOverlay && (
        <div
          className="
          size-full 
          hidden justify-center items-center 
          absolute inset-0 
          group-hover/card:flex
          bg-black/80
          z-30
          ">
          {props.children}
        </div>
      )}
    </div>
  );
}