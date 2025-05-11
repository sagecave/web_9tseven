"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    console.log("Menu clicked", isOpen);
  };
  return (
    <>
      <div className="flex justify-between absolute w-full p-6 z-20 md:hidden">
        <button type="button" aria-expanded={isOpen} aria-label="Open Menu" onClick={handleMenuClick} className=" cursor-pointer">
          <div className="flex flex-col gap-1">
            <span className=" w-6 h-0.5 bg-amber-400"></span>
            <span className=" w-6 h-0.5 bg-amber-400"></span>
            <span className=" w-6 h-0.5 bg-amber-400"></span>
          </div>
        </button>
        {isOpen && (
          <div>
            <p>LOGO</p>
          </div>
        )}
        {isOpen && (
          <ul className="flex gap-3 ">
            <li>
              <Link href="#">SVG</Link>
            </li>
            <li>
              <Link href="#">SVG</Link>
            </li>
            <li>
              <Link href="#">SVG</Link>
            </li>
          </ul>
        )}
      </div>
      <nav className="w-full ">
        <div className={"hidden  md:flex md:justify-evenly"}>
          <div>
            <ul className="flex gap-3 ">
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">Community</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="#">
              <p>LOGO</p>
            </Link>
          </div>
          <div className={`${isOpen ? "hidden" : "block"}`}>
            <ul className="flex gap-3 ">
              <li>
                <Link href="#">SVG</Link>
              </li>
              <li>
                <Link href="#">SVG</Link>
              </li>
              <li>
                <Link href="#">SVG</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="w-full h-1/2 bg-blue-400 z-12 absolute" key="modal" initial={{ y: -300, opacity: 1 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -300, opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }}>
            <div className=" mt-10 p-6">
              <div>
                <ul className={`${isOpen ? "flex flex-col z-11" : "flex gap-3"}`}>
                  <li>
                    <Link href="#">Shop</Link>
                  </li>
                  <li>
                    <Link href="#">Community</Link>
                  </li>
                  <li>
                    <Link href="#">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
