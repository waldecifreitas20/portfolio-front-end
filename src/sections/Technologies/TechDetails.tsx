import { useContext } from "react";
import type { Technology } from "@/types/Technology";
import { useLanguage } from "@hooks/useLanguage";
import { ProjectsContext } from "@providers/ProjectProvider";
import { ColoredLabel } from "@components/ColoredLabel";
import { List } from "@components/List";
import { Link } from "lucide-react";


interface TechnologyDetailsProps {
  technology: Technology;
}

export function TechnologyDetails(props: TechnologyDetailsProps) {
  const { content, getActiveLanguage } = useLanguage();
  const { projects: projectSection, skills: skillsSection } = content.tech.details;

  const { getSkills, getProjectsByTech } = useContext(ProjectsContext);
  const projectsNames = getProjects();
  const skills = getTechSkills();



  function getTechSkills() {
    const ptSkills = new Set<string>();
    const enSkills = new Set<string>();

    getProjectsByTech(props.technology)
      .forEach(project => {
        getSkills(project).forEach(skill => {
          ptSkills.add(skill.pt);
          enSkills.add(skill.en);
        });
      });

    return {
      pt: Array.from(ptSkills),
      en: Array.from(enSkills),
    }
  }

  function getProjects() {
    return getProjectsByTech(props.technology).map(project => project.name);
  }


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
        <img src={props.technology.logoUrl} alt="" />
        <p>{props.technology.name}</p>
      </h3>

      <p className="mb-2 text-sm">{props.technology.desc}</p>

      <div className="mt-4">
        <ColoredLabel
          isBackend={props.technology.isBackend}
          textSize="text-base">
          {skillsSection}
        </ColoredLabel>
        <List
          items={skills[getActiveLanguage()]}
          icon={<Link size={14} />}
          useLink
          linkKeyname="deploy"
        />
      </div>

      <div className="mt-4">
        <ColoredLabel
          isBackend={props.technology.isBackend}
          textSize="text-base">
          {projectSection}
        </ColoredLabel>
        <List
          items={projectsNames}
          icon={<Link size={14} />}
          useLink
          linkKeyname="deploy"
        />
      </div>



    </article>
  );
}