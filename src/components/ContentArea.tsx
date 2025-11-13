import type { PropsWithChildren } from "react";

interface ContentAreaProps extends PropsWithChildren {
  tailwindCss?: string;
}

export function ContentArea(props: ContentAreaProps) {
  return (
    <section
      className={`
      px-2 ${props.tailwindCss ?? ""}
      mx-auto

      md:py-8
      md:max-w-[800px]
      
      lg:max-w-[1000px]
      `}>
      {props.children}
    </section>
  );
}