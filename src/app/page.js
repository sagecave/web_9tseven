"use client";
import Image from "next/image";
import ProductContainer from "../../components/frontPageProductsShow/productContainer";
import ProductLayout from "../../layouts/ProductLayout";
export default function Home() {
  return (
    <>
      <section className="h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageFirstPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 mt-10">
        <ProductLayout>
          <ProductContainer />
        </ProductLayout>
      </section>
      <section className="h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <div className="flex">
          <Image src="/assets/images/frontPageSecoundPicColor.jpg" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover hover:saturate-50 " />
          <Image src="/assets/images/frontPageSecoundPic2.jpg" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover  saturate-0 hover:saturate-100" />
        </div>
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 mt-10">
        <ProductLayout>
          <ProductContainer />
        </ProductLayout>
      </section>
      <section className="h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageThridPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 mt-10">
        <ProductLayout>
          <ProductContainer />
        </ProductLayout>
      </section>
      <section className="h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageFourPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
      </section>
    </>
  );
}
