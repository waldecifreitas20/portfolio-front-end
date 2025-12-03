import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";


interface SelectProps {
  label: string;
  options: Array<string>;
  required?: boolean;
  id?: string;
  name?: string;
}

export function Select(props: SelectProps) {
  const [value, setValue] = useState("");
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const inputRef = useRef(null);

  function onSelectOption(opt: string) {
    setValue(opt);
    closeDropdown();
  }

  function openDropdown() {
    setDisplayDropdown(true);
  }

  function closeDropdown() {
    setDisplayDropdown(false);

  }

  return (
    <div>
      <label htmlFor="name" className="block">
        {props.label}:
        {props.required && <span className="text-(--primary)">*</span>}
      </label>


      <input
        ref={inputRef}
        name={props.name ?? ""}
        className="
          relative
          text-left
         bg-white/5
         border-b-3 border-white/20 
         rounded-sm 
         block w-full
         focus:border-b-(--primary) 
         outline-0 
         px-2 py-2 caret-transparent
         cursor-pointer
        "
        onClick={() => openDropdown()}
        value={value}
        required={props.required}
      />



      <AnimatePresence>

        {displayDropdown && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "max-content" }}
            exit={{ height: 0 }}
            transition={{ duration: .100 }}
            className="
            bg-black/20 
            border border-(--primary) 
            shadow-lg shadow-black/20
            overflow-hidden 
            rounded-b-md
            ">
            {props.options.map((opt, i) => {
              return (
                <li
                  key={`subject-${i}`}
                  className="cursor-pointer text-sm hover:bg-(--primary) leading-10 indent-2"
                  onClick={() => onSelectOption(opt)}>{opt}</li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}