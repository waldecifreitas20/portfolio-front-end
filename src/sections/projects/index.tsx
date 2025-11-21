import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import mobileBg from "../../assets/bg-projects-mobile.jpg";
import desktopBg from "../../assets/bg-projects-desktop.jpg";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { ProjectsView } from "./ProjectsView/ProjectsView";
import { ProjectDetails } from "./ProjectsView/ProjectDetails";
import { useCallback, useState } from "react";
import type { Project } from "../../@types/Project";

export function ProjectsSection() {
  const { title } = useLanguage().content.projects;
  const { isMobile } = useBreakpoint(767);
  const [selectedProject, setSelectedProject] = useState<Project>();

  const onSelectProject = useCallback(handleSelectProject, []);

  function handleSelectProject(project: Project) {
    setSelectedProject(project);
  }

  return (
    <section
      className="relative min-h-screen w-screen block bg-cover bg-top bg-no-repeat"
      style={{ background: `url(${isMobile ? mobileBg : desktopBg})` }}
    >

      <ContentArea>
        <SectionTitle text={title} />
        {/* project list */}
        <ProjectsView onSeeDetails={onSelectProject} />
        {/* PROJECT DETAILS */}
        {selectedProject && (
          <ProjectDetails project={selectedProject}  />
        )}
      </ContentArea>
    </section>
  );
}