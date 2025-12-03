import { useRef, type ReactElement } from "react";
interface ListProps {
  items: Array<any>,
  icon?: ReactElement,
  useLink?: boolean;
  linkKeyname?: string;
}

export function List(props: ListProps) {
  const listId = useRef(Math.random());
  return (
    <ul className="text-sm mt-2">
      {props.items.map((item, i) => {
        const classes = "flex items-center gap-1";
        const itemKey = `list$${listId.current}-item$${i}`;

        if (props.useLink) {
          return (
            <a
              className={classes}
              key={itemKey}
              href={item[props.linkKeyname ?? ""] ?? ""}>
              {props.icon}
              {item.name}
            </a>
          );
        }

        return (
          <li className={classes} key={itemKey}>
            {props.icon}
            {item.name}
          </li>
        );
      })}
    </ul >
  );
}