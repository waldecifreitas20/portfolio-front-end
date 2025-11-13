import type { PropsWithChildren } from "react";

interface ContentAreaProps extends PropsWithChildren {
  tailwindCss?: string;
}

export function ContentArea(props: ContentAreaProps) {
  return (
    <section
      className={`
      ${props.tailwindCss ?? "md:py-8"}
      px-4 
      mx-auto
      
      
      md:max-w-[800px]
      
      lg:max-w-[1000px]
      `}>
      {props.children}
    </section>
  );
}