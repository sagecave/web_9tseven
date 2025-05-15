import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import basketIcon from "../../public/assets/icons/basket.svg";
import loop from "../../public/assets/icons/loop.svg";
import personCircle from "../../public/assets/icons/personCircle.svg";
import BasketProductCard from "./BasketProductCard";
import { create } from "zustand";
import { useBasketStore } from "../../globalHooks/basketProduct";

const BasketModal = (isBasketOpen, setBasketOpen) => {
  const { BasketSatete } = useBasketStore();
  console.log("BasketSatete modal", BasketSatete);
  return (
    <AnimatePresence>
      {isBasketOpen && (
        <motion.div className="w-1/2 h-1/2 bg-main_black z-12 absolute mt-[-1px] " key="modal" initial={{ x: -300, opacity: 1 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }}>
          <div className=" p-6">
            {BasketSatete.map((product) => (
              <BasketProductCard key={product.id} title={product.title} />
            ))}

            {/* <p className="text-amber-200">Product:{JSON.stringify(BasketSatete)}</p>
            <p>{BasketSatete[0].title}</p>
            <img src={BasketSatete[0]?.first_image} alt="Product Image" width={500} height={500} className="object-cover" /> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BasketModal;
