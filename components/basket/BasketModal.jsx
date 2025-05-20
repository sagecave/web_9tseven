"use client";
import { motion, AnimatePresence } from "motion/react";
import BasketProductCard from "./BasketProductCard";
import { useBasketStore } from "../../globalHooks/basketProduct";
import { useStore } from "../../globalHooks/basketHooks";
import { useState, useEffect, use } from "react";

const BasketModal = (isBasketOpen, setBasketOpen) => {
  const { BasketSatete } = useBasketStore();

  const productQuantities = useStore((state) => state.productQuantities);

  const totalPrices = BasketSatete.reduce((acc, product) => {
    const quantity = productQuantities[product.id] || 0;
    return acc + product.price * quantity;
  }, 0);
  console.log("BasketSatete modal", BasketSatete);
  return (
    <div>
      <AnimatePresence>
        {isBasketOpen && (
          <motion.div
            className="w-full md:w-1/2 h-1/2 bg-main_black z-12 absolute mt-[-1px] md:left-1/2 flex flex-col gap-4 p-4 "
            key="modal"
            initial={{ x: 300, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <h2 className="text-main_white">Your items</h2>
            <div className="snap-y snap-mandatory overflow-y-scroll h-full ">
              <div>{BasketSatete.map((product) => (console.log("product", product), (<BasketProductCard key={product.id} id={product.id} title={product.title} productImages={product.first_image} item={product.item} price={product.price} />)))}</div>
            </div>
            <div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-main_white">Total</p>
                <p className="text-main_white">{totalPrices},-</p>
              </div>
              <button className="p-4 w-full bg-main_white hover:bg-alternativ_black hover:text-main_white text-main_black">checkout</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasketModal;
