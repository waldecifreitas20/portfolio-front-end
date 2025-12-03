import { Mail } from "lucide-react";
import { ContentArea } from "../../components/ContentArea";
import gitHubIcon from "../../assets/github-white-icon.svg";
import linkedinIcon from "../../assets/linkedin-white-icon.svg";
import { useLanguage } from "../../hooks/useLanguage";


const socials = [
  { iconSrc: gitHubIcon, link: 'https://github.com/waldecifreitas20' },
  { iconSrc: linkedinIcon, link: 'https://www.linkedin.com/in/waldeci-freitas21' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { menu, footer } = useLanguage().content;

  return (
    <footer className="bg-(--bg-light) text-white">
      <ContentArea tailwindCss="py-8">
        <div className="flex items-center gap-4 mx-auto w-fit h-[30px]">
          {socials.map((social, i) => {
            return (
              <a
                key={`social-${i}`}
                className=" rounded-full p-1 h-full overflow-clip hover:scale-125 transition-all duration-350"
                href={social.iconSrc}
                target="_blank"
              >
                <img className="size-full" src={social.iconSrc} alt="GitHub" />
              </a>
            );
          })}
          <Mail size={30} className="text-white hover:scale-125 transition-all duration-350" />
        </div>


        <nav
          className="
          flex flex-col 
          text-white/70 text-md 
          items-center justify-center 
          my-8 gap-2
          
          md:flex-row 
          md:gap-8
          ">
          {menu.options.map((opt, i) => {
            return <a className="hover:text-(--primary)" href={opt.refTo}>{opt.label}</a>
          })}
        </nav>

        <div className="text-white/30 w-full text-center mt-20">
          <p>{currentYear} &copy; {footer.copyright}</p>
          <p>{footer.developedBy}
            <a
              className="text-(--accent) ml-1"
              href="https://www.linkedin.com/in/waldeci-freitas21"
            > Waldeci Freitas</a>
          </p>
        </div>
      </ContentArea>
    </footer>
  );
}