import type { MenuOption } from "../../../@types/MenuOption";
interface MenuOptionProps {
  option: MenuOption;
  onTap?: (opt: MenuOption) => void;
}

export function MenuOpt(props: MenuOptionProps) {
  return (
    <li key={`opt-${props.option.refTo}`}>
      <a
        onClick={() => props.onTap!(props.option) ?? ({})}
        href={props.option.refTo}
        className="
        text-white/50
        block w-full
        py-4
        border-l-8 border-transparent  
        px-4 
        text-xl
        font-light
        
        transition-all duration-150

        hover:text-white
        hover:border-white
        hover:bg-purple-600
        hover:indent-4
        active:border-white
        active:bg-purple-600
        ">{props.option.label}</a>
    </li>
  );
}