"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBook() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setVisible(v > 600));
  }, [scrollY]);

  return (
    <motion.div
      className="floating-book"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.4 }}
    >
      <a
        href="#booking"
        className="btn-primary shadow-2xl shadow-black/30"
        data-hover
        style={{ boxShadow: "0 8px 32px rgba(200,169,107,0.25)" }}
      >
        Book Now
      </a>
    </motion.div>
  );
}
