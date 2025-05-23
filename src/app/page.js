"use client";
import Image from "next/image";
import ProductContainer from "../../components/frontPageProductsShow/productContainer";
import ProductLayout from "../../layouts/ProductLayout";
export default function Home() {
  return (
    <>
      <section className="h-[100vh] ">
        <Image src="/assets/images/frontPageFirstPic.jpg" alt="hero" width={1000} height={1000} className="w-full h-full  overflow-hidden  object-cover " />

        <h1 className="text-alternativ_black">Front page</h1>
      </section>
      <ProductLayout>
        <ProductContainer />
      </ProductLayout>
    </>
  );
}
