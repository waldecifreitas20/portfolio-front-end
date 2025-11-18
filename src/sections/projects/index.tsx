import { ContentArea } from "../../components/ContentArea";
import { SectionTitle } from "../../components/SectionTitle";
import { useLanguage } from "../../hooks/useLanguage";
import mobileBg from "../../assets/bg-projects-mobile.jpg";
import desktopBg from "../../assets/bg-projects-desktop.jpg";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export function ProjectsSection() {
  const { title } = useLanguage().content.projects;
  const { isMobile } = useBreakpoint();

  return (
    <section
      className="h-screen w-full"
      style={{
        background: `url(${isMobile ? mobileBg : desktopBg}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <ContentArea>
        <SectionTitle text={title} />
      </ContentArea>
    </section>
  );
}