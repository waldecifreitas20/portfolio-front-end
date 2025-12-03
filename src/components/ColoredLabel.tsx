import type { PropsWithChildren } from "react";

interface ColoredLabelProps extends PropsWithChildren {
  isBackend?: boolean;
  textSize: "text-base" | "text-lg"
}

export function ColoredLabel(props: ColoredLabelProps) {
  const textColor = `var(${props.isBackend ? '--primary' : '--accent'})`;

  return (
    <label className={`flex gap-1 text-white font-bold ${props.textSize}`}>
      <span style={{ color: textColor }}>#</span>
      {props.children}
    </label>
  );
}