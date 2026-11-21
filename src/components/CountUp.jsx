import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export default function CountUp({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (current) => Math.round(current));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const controls = animate(count, value, {
      duration: prefersReducedMotion ? 0 : 1.1,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, value, prefersReducedMotion]);

  return <motion.span>{rounded}</motion.span>;
}
