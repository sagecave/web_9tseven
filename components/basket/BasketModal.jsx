import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import basketIcon from "../../public/assets/icons/basket.svg";
import loop from "../../public/assets/icons/loop.svg";
import personCircle from "../../public/assets/icons/personCircle.svg";
import BasketProductCard from "./BasketProductCard";
import { create } from "zustand";

const BasketModal = (isBasketOpen, setBasketOpen) => {
  return (
    <AnimatePresence>
      {isBasketOpen && (
        <motion.div className="w-1/2 h-1/2 bg-main_black z-12 absolute mt-[-1px] " key="modal" initial={{ x: -300, opacity: 1 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }}>
          <div className=" p-6">
            <BasketProductCard />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BasketModal;
