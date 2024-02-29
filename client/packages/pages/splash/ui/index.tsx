import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, Variants, motion } from "framer-motion";
import "./style.scss";

export const SplashPage = () => {
  const variants: Variants = {
    initial: { opacity: 0, y: 500, rotateY: 720 },
    animate: { opacity: 1, y: 0, rotateY: 0 },
    exit: { opacity: 0, y: 500 },
  };

  const navigate = useNavigate();
  setTimeout(() => {
    navigate({ to: "/home" });
  }, 4000);

  return (
    <main className="splash">
      <AnimatePresence mode="wait">
        <motion.img
          src="./logo.png"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 2,
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>
    </main>
  );
};
