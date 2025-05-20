"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import basketIcon from "../../public/assets/icons/basket.svg";
import loop from "../../public/assets/icons/loop.svg";
import personCircle from "../../public/assets/icons/personCircle.svg";
import BasketModal from "../basket/BasketModal";
import { useStore } from "../../globalHooks/basketHooks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBasketOpen, setBasketOpen] = useState(false);

  const allProductQuantities = useStore((state) => state.allProductQuantities);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleBasketClick = () => {
    setBasketOpen(!isBasketOpen);
    console.log("Basket clicked", isBasketOpen);
  };
  return (
    <>
      <div className="flex justify-between absolute w-full  p-8 z-20 md:hidden">
        <button type="button" aria-expanded={isOpen} aria-label="Open Menu" onClick={handleMenuClick} className=" cursor-pointer">
          <div className="flex flex-col gap-1">
            <span className=" w-6 h-0.5 bg-main_white"></span>
            <span className=" w-6 h-0.5 bg-main_white"></span>
            <span className=" w-6 h-0.5 bg-main_white"></span>
          </div>
        </button>
        {isOpen && (
          <div>
            <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
          </div>
        )}
        {isOpen && <div></div>}
        {!isOpen && (
          <ul className="flex gap-3 ">
            <li>
              <Link href="#">
                <Image src={loop} alt="Logo" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={personCircle} alt="Logo" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <button type="button" aria-expanded={isBasketOpen} aria-label="Open Basket" onClick={handleBasketClick} className=" cursor-pointer">
                  <Image src={basketIcon} alt="Logo" width={20} height={20} />
                  <p>{allProductQuantities}</p>
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <nav className="w-full p-10 md:pt-6 md:pb-6 md:pl-14 md:pr-14 bg-main_black ">
        <div className={"hidden    md:flex md:justify-between"}>
          <div>
            <ul className="flex gap-3 ">
              <li className="hover:text-main_white hover:underline">
                <Link href="/productPage">Shop</Link>
              </li>
              <li className="hover:text-main_white hover:underline">
                <Link href="#">Community</Link>
              </li>
              <li className="hover:text-main_white hover:underline">
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <div className={`${isOpen ? "hidden" : "block"}`}>
            <ul className="flex gap-3 ">
              <li>
                <Link href="#">
                  <Image src={loop} alt="Logo" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={personCircle} alt="Logo" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <button type="button" aria-expanded={isBasketOpen} aria-label="Open Basket" onClick={handleBasketClick} className=" cursor-pointer">
                    <Image src={basketIcon} alt="Logo" width={20} height={20} />
                    <p>{allProductQuantities}</p>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="w-full h-1/2 bg-main_black z-12 absolute mt-[-1px] " key="modal" initial={{ y: -300, opacity: 1 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }}>
            <div className=" p-6">
              <div>
                <ul className={`${isOpen ? "flex flex-col z-11 text-HeaderSizeBig text-alternativ_white " : "flex gap-3"}`}>
                  <li className="hover:text-main_white hover:underline">
                    <Link href="/productPage">Shop</Link>
                  </li>
                  <li className="hover:text-main_white hover:underline">
                    <Link href="#">Community</Link>
                  </li>
                  <li className="hover:text-main_white hover:underline">
                    <Link href="#">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isBasketOpen && <BasketModal isBasketOpen={isBasketOpen} setBasketOpen={setBasketOpen} />}
    </>
  );
};

export default HamburgerMenu;
