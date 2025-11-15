interface TabProps {
  id: number,
  text: string;
  isActive: boolean;
  activeColor: string,
  onClick: (id: number) => void,
}

export function Tab(props: TabProps) {
  return (
    <span
      className={`
        ${props.isActive ? 'border-b text-white' : 'text-white/50'} 
        flex gap-1
        font-bold text-xl
        cursor-pointer
        px-2 pb-1
      `}
      style={{ borderColor: props.activeColor }}
      onClick={() => props.onClick(props.id)}
    >
      <span style={{ color: props.activeColor }}>#</span>
      {props.text}
    </span>
  );
}