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
import { AnimatePresence, motion } from "motion/react";

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
      className="
      overflow-hidden  
      min-h-screen max-w-screen 
      block 
      bg-cover bg-top bg-no-repeat"
      style={{ background: `url(${isMobile ? mobileBg : desktopBg})` }}
    >

      <ContentArea>

        <SectionTitle text={title} />

        {/* project list */}

        <div className="
        flex w-full justify-center 
        items-center h-max flex-wrap
        md:justify-between
        md:flex-nowrap
        md:items-start
        gap-4
        ">
          {/* PROJECT DETAILS */}
          <div className={selectedProject ? "w-fit" : "w-full"}>
            <ProjectsView onSeeDetails={onSelectProject} shrink={selectedProject !== undefined} />
          </div>
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: .300 }}
                className="relative sm:max-w-[400px] md:w-full -order-1 md:order-1">
                <ProjectDetails
                  project={selectedProject}
                  onDismiss={() => setSelectedProject(undefined)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContentArea>
    </section>
  );
}