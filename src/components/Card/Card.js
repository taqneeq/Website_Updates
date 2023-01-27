import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

<<<<<<< HEAD
const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
=======
const Card = ({ data }) =>
{
    const [open, setOpen] = useState(false);

    const openModal = () =>
    {
        setOpen(true);
    };

    const closeModal = () =>
    {
        setOpen(false);
    };

    return (
        <>
            <Listing data={data} open={openModal} />
            <AnimatePresence>
                {open && (
                    <Overlay close={closeModal}>
                        <Modal data={data} close={closeModal} />
                    </Overlay>
                )}
            </AnimatePresence>
        </>
    );
>>>>>>> 769890ef5e3ebd0f955735385b3e6d0d9ea8a229
};

export default Card;
