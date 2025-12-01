import { LoaderCircle } from "lucide-react";
import { motion } from "motion/react";

export function Loading() {

  return (
    <motion.p
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: .350
      }}
    ><LoaderCircle /></motion.p>
  );

}