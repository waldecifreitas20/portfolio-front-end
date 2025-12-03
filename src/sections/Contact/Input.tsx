import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textarea?: boolean;
}

export function Input(props: InputProps) {
  const style = ` 
    bg-white/5
    border-b-3 border-white/20 
    rounded-sm 
    block w-full
    focus:border-b-(--primary) 
    outline-0 
    px-2 py-2 `;


  return (
    <div className="w-full">
      <label htmlFor="name" className="block mb-1">
        {props.label}:
        {props.required && <span className="text-(--primary)">*</span>}
      </label>

      {props.textarea ? (
        <textarea
          name={props.name ?? ""}
          className={`${style} h-32 resize-none`}
          required={props.required}
        ></textarea>
      ) : (
        <input
          {...props}
          type={props.type ?? "text"}
          className={style}
        />
      )}
    </div>
  );
}