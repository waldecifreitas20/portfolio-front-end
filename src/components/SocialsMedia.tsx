import gitHubIcon from "../assets/github-white-icon.svg";
import linkedinIcon from "../assets/linkedin-white-icon.svg";

const socials = [
  { iconSrc: gitHubIcon, link: 'https://github.com/waldecifreitas20' },
  { iconSrc: linkedinIcon, link: 'https://www.linkedin.com/in/waldeci-freitas21' },
];

export function SocialsMedia() {
  return (
    <article
      className="
      flex h-10 gap-2 w-fit mx-auto mb-4
      lg:mx-0
      lg:mr-auto
      ">
      {socials.map(social => {
        return (
          <a
            className="size-full opacity-70 hover:opacity-100"
            href={social.iconSrc}
            target="_blank"
          >
            <img className="size-full" src={social.iconSrc} alt="GitHub" />
          </a>
        );
      })}

    </article>

  );
}