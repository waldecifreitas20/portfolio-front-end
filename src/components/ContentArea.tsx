import type { PropsWithChildren } from "react";

interface ContentAreaProps extends PropsWithChildren {
  tailwindCss?: string;
}

export function ContentArea(props: ContentAreaProps) {
  return (
    <section className={`px-2 ${props.tailwindCss ?? ""}`}>
      {props.children}
    </section>
  );
}