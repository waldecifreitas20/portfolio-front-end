interface SectionTitleProps {
  text: string;
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="w-fit mx-auto mb-10">
      <h1 className="text-white text-3xl font-bold pb-4">{props.text}</h1>
      <span className="block border-b-2 w-10 mx-auto border-(--accent)"></span>
    </div>
  );
}