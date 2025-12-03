import { useContext } from "react";
import type { Technology } from "../../@types/Technology";
import { useLanguage } from "../../hooks/useLanguage";
import { ProjectsContext } from "../../providers/ProjectProvider";
import { ColoredLabel } from "../../components/ColoredLabel";
import { List } from "../../components/List";
import { CircleSmall, Link } from "lucide-react";

interface TechnologyDetailsProps {
  technology: Technology;
}

export function TechnologyDetails(props: TechnologyDetailsProps) {
  const { projects, skills } = useLanguage().content.tech.details;
  const { getAllByTech } = useContext(ProjectsContext);

  return (
    <article
      className="
      block border border-white/50 rounded-lg 
      h-max w-full
      mt-5 md:mt-0
      text-white/70
      p-4
    ">
      <h3 className="text-xl text-white mb-4 size-10 flex gap-4 items-center">
        <img src={props.technology.iconUrl} alt="" />
        {props.technology.name}
      </h3>

      <p className="mb-2 text-sm">{props.technology.description}</p>

      <div>
        <ColoredLabel
          isBackend={props.technology.isBackend}
          textSize="text-base">
          {skills}
        </ColoredLabel>
        <List
          items={props.technology.skills}
          icon={<CircleSmall size={14} />}
        />
      </div>

      <div className="mt-4">
        <ColoredLabel
          isBackend={props.technology.isBackend}
          textSize="text-base">
          {projects}
        </ColoredLabel>
        <List
          items={getAllByTech(props.technology)}
          icon={<Link size={14} />}
          useLink
          linkKeyname="deploy"
        />
      </div>

    </article>
  );
}