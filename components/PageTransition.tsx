"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const PageTransition = ({ children, className }: Props) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-screen h-screen fixed top-0 pointer-events-none bg-borderColor"
        >
        </motion.div>
          {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
