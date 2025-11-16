import type { PropsWithChildren } from "react";
import { Theme } from "../shared/Theme";

interface ColoredLabelProps extends PropsWithChildren {
  isBackend?: boolean;
  textSize: "text-base" | "text-lg"
}

export function ColoredLabel(props: ColoredLabelProps) {
  return (
    <label className={`flex gap-1 text-white font-bold ${props.textSize}`}>
      <span style={{
        color: props.isBackend ? Theme.primary : Theme.accent
      }}>#</span>
      {props.children}
    </label>
  );
}