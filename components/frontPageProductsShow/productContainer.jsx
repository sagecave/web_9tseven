"use client";
import { useBasketStore } from "../../globalHooks/basketProduct";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";
import { fetchProducts } from "../../api/products";

import Image from "next/image";

const ProductContainer = () => {
  const {
    data: productData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productKey"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }
  return (
    <section className="grid lg:grid-cols-2 lg:grid-rows-3 lg:h-[100vh] ">
      <div className="lg:col-start-1 lg:row-start-1 lg:col-end-3 lg:row-end-3">
        <div>
          <div className="grid grid-cols-2 gap-4 lg:pr-4">
            {productData
              .slice(2, 3)
              .concat(productData.slice(0, 1))
              .map((item) => (
                <ProductCard key={item.id} productImage={item.first_image} title={item.title} category={item.category} price={item.price} slugName={item.slug_name} />
              ))}
          </div>
        </div>
      </div>
      <div className="lg:col-start-1 lg:row-start-3 lg:col-end-3">
        <h2 className=" text-main_black">GRATITUDE</h2>
        <p className="md:w-[20rem] text-alternativ_black">
          Gratitude means noticing and appreciating the good things in life. It can boost your mood and help you feel more connected. With Social Run, it’s easier to feel grateful — whether it's for a shared smile, a team effort, or just showing up
          together. Running with others brings small moments that mean a lot.
        </p>
      </div>
      <div className="lg:col-start-3 row-start-1 lg:row-end-4 row-span-1">
        <Image src="/assets/images/firstProductShow.jpg" alt="hero" width={500} height={500} />
      </div>
    </section>
  );
};

export default ProductContainer;
