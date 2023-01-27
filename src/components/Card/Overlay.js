import React from "react";
import "./Overlay.css";
import { motion } from "framer-motion";

<<<<<<< HEAD
const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: "rgba(0,0,0,0.6)" },
    closed: { backgroundColor: "rgba(0,0,0,0)" },
  };

  return (
    <motion.div
      className="overlay"
      onClick={close}
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      {children}
    </motion.div>
  );
=======
const Overlay = ({ children, close }) =>
{
    const variants = {
        open: { backgroundColor: "rgba(0,0,0,0.6)" },
        closed: { backgroundColor: "rgba(0,0,0,0)" },
    };

    return (
        <motion.div
            className="overlay"
            onClick={close}
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            key="overlay"
        >
            {children}
        </motion.div>
    );
>>>>>>> 769890ef5e3ebd0f955735385b3e6d0d9ea8a229
};

export default Overlay;
