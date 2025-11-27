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
  const [value, setValue] = useState("---");
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
        readOnly
        className="
          relative
          text-left
         bg-white/5
         border-b-3 border-white/20 
         rounded-sm 
         block w-full
         focus:border-b-(--primary) 
         outline-0 
         px-2 py-2 
        "
        onClick={() => openDropdown()}
        value={value}
      />

      <AnimatePresence>

        {displayDropdown && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "max-content" }}
            exit={{ height: 0 }}
            transition={{ duration: .100 }}
            className="bg-black/20 border overflow-hidden">
            {props.options.map((opt, i) => {
              return (
                <li
                  key={`subject-${i}`}
                  className="cursor-pointer hover:bg-(--primary)"
                  onClick={() => onSelectOption(opt)}>{opt}</li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>



      <input
        id="name"
        type="text"
        name={props.name ?? ""}
        className="hidden"
      />
    </div>
  );
}