import { ExternalLink, ExternalLinkIcon, MoveLeft } from "lucide-react";
import type { Project } from "../../../@types/Project";
import { ImageContainer } from "../../../components/ImageContainer";
import { useLanguage } from "../../../hooks/useLanguage";
import { Button } from "../../../components/Button";
import { ColoredLabel } from "../../../components/ColoredLabel";
import { TechSubsection } from "./TechSubSection";
import { GithubIcon } from "../../../components/GitHubIcon";

interface ProjectDetailsProps {
  project: Project;
  onDismiss: (project: Project) => void;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { buttons, concepts } = useLanguage().content.projects;
  const { project } = props;

  return (
    <div
      className=" 
      text-white 
      px-4 pb-4 md:px-6 md:pb-6
      bg-[#140F14]
      w-full 
      border border-(--primary) rounded-lg">
      <button
        className="flex items-center gap-2 leading-10"
        onClick={() => props.onDismiss(props.project)}
      >
        <MoveLeft /> {buttons.close}
      </button>
      <ImageContainer src={project.previewUrl} />
      <p className="font-bold text-xl lg:text-2xl my-4">
        {project.name}
        <span className="w-10 mt-2 block border-b-3 border-(--primary)"></span>
      </p>

      <p className="text-white/70">{project.description}</p>

      <div className="my-4 pb-4 flex flex-col md:flex-row gap-2 md:gap-4 border-b border-white/5">
        <a className="block w-full h-full" href={project.repository} target="_blank">
          <Button style="flex justify-center gap-2 font-bold md:py-3" >
            <span className="h-6">
              <GithubIcon />
            </span>
            {buttons.repository}
          </Button>
        </a>
        <a className="block w-full h-full" href={project.deploy} target="_blank">
          <Button accent style="flex justify-center gap-2 font-bold md:py-3">
            <span className=" h-6">
              <ExternalLinkIcon />
            </span>
            {buttons.deploy}
          </Button>
        </a>
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