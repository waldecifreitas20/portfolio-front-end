import type { Technology } from "../../../@types/Technology";
import { ColoredLabel } from "../../../components/ColoredLabel";

interface TechSubsectionProps {
  title: string;
  isBackend?: boolean;
  techs: Array<Technology>;
}

export function TechSubsection(props: TechSubsectionProps) {
  return (
    <div className="my-4">
      <ColoredLabel textSize="text-lg" isBackend={props.isBackend}>{props.title}</ColoredLabel>
      <ul className="flex gap-1 mt-2">{
        props
          .techs
          .filter(tech => props.isBackend ? tech.isBackend : !tech.isBackend)
          .map(tech => {
            return <p
              className="
              py-1 px-3 
              text-sm 
              bg-zinc-800 
              border text-zinc-400 
              w-fit rounded-lg"
              style={{ color: tech.color }}>{tech.name}</p>;
          })
      }</ul>
    </div>
  );
}