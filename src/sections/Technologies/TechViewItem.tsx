import type { Technology } from "../../@types/Technology";

interface TechViewItemProps {
  tech: Technology,
}

export function TechViewItem(props: TechViewItemProps) {
  const { tech } = props;

  return (
    <li className="block w-full">
      <p className="text-white">{tech.name}</p>
      <progress
        className="block w-full"

        value={85} max={100}></progress>
    </li>
  );
}