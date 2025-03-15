import React from "react";
import { motion } from "framer-motion";

const Pagetransition = ({ children }) => {
  return (
    <div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Pagetransition;
