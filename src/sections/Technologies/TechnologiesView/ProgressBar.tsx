interface ProgressBarProps {
  value: number;
  max: number;
  fillColor: string;
}

export function ProgressBar(props: ProgressBarProps) {
  const fillPercent = props.value / props.max * 100;

  return (
    <div className="relative w-full block bg-white/10 h-2">
      <span
        className="block h-full"
        style={{
          width: `${fillPercent}%`,
          backgroundColor: props.fillColor,
        }}></span>
    </div>
  );
}