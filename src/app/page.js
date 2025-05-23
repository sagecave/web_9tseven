"use client";
import Image from "next/image";
import ProductContainer from "../../components/frontPageProductsShow/productContainer";
import ProductLayout from "../../layouts/ProductLayout";
export default function Home() {
  return (
    <>
      <section className="h-[100vh] col-start-1 col-end-4 grid overflow-hidden">
        <Image src="/assets/images/frontPageFirstPic.jpg" alt="hero" width={1000} height={1000} className="w-full h-full  overflow-hidden  object-cover " />

        <h1 className="text-alternativ_black">Front page</h1>
      </section>
      <section className="grid col-start-2 col-end-3 mt-10">
        <ProductLayout>
          <ProductContainer />
        </ProductLayout>
      </section>
    </>
  );
}
