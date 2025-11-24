import { MoveLeft } from "lucide-react";
import type { Project } from "../../../@types/Project";
import { ImageContainer } from "../../../components/ImageContainer";
import { useLanguage } from "../../../hooks/useLanguage";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { ColoredLabel } from "../../../components/ColoredLabel";
import { TechSubsection } from "./TechSubSection";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { buttons, concepts } = useLanguage().content.projects;
  const { project } = props;

  return (
    <div
      className="
      absolute 
      text-white 
      z-50 top-0 
      px-4 pb-4
      bg-zinc-900 
      w-full 
      border border-(--primary) rounded-lg">
      <button className="flex items-center gap-2 leading-10">
        <MoveLeft /> {buttons.close}
      </button>
      <ImageContainer src={project.previewUrl} />
      <p className="font-bold text-xl my-4">
        {project.name}
        <span className="w-10 mt-2 block border-b-3 border-(--primary)"></span>
      </p>

      <p>{project.description}</p>

      <div className="my-4 pb-4 flex flex-col md:flex-row gap-2 border-b border-white/5">
        <PrimaryButton>{buttons.repository}</PrimaryButton>
        <PrimaryButton>{buttons.deploy}</PrimaryButton>
      </div>


      <TechSubsection
        techs={project.technologies}
        title="Front-end"
      />
      <TechSubsection
        techs={project.technologies}
        title="Back-end"
        isBackend
      />

      <ColoredLabel isBackend textSize="text-lg">{concepts}</ColoredLabel>
      <div className="text-sm text-white/70">
        {project.usedSkills
          .map((skill, i) => {
            const isLastOne = project.usedSkills.length === (i + 1);

            return <span
              key={`skill?${skill.id}`}
            >{skill.name}{!isLastOne && ", "}</span>;
          })}
      </div>

    </div>

  );
}