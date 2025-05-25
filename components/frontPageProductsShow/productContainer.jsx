"use client";
import { useBasketStore } from "../../globalHooks/basketProduct";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";
import { fetchProducts } from "../../api/products";

import Image from "next/image";

const ProductContainer = ({ header, paragraph, images, variant = "normalContainer", slice1, slice2, slice3, slice4 }) => {
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
  let productsContainer = "";
  let imageGridClass = "";
  let imagesContainer = "";
  let textConatiner = "";
  let test = 1;
  let test2 = 2;
  switch (variant) {
    case "normalContainer":
      //   imagesContainer = "grid grid-cols-2 gap-4 lg:pr-4";

      //   textConatiner = "lg:col-start-1 lg:row-start-3 lg:col-end-3";
      imagesContainer = "grid grid-cols-2 gap-4 lg:pr-4";
      textConatiner = "lg:col-start-1 lg:row-start-3 lg:col-end-3 p-6 lg:p-0 ";
      imageGridClass = "lg:col-start-3 row-start-1 lg:row-end-4 row-span-1 hidden  lg:block";
      productsContainer = "lg:col-start-1 lg:row-start-1 lg:col-end-3 lg:row-end-3 grid p-6 lg:p-0 ";

      break;
    case "reverseContainer":
      imagesContainer = "grid grid-cols-2 gap-4 lg:pr-4";
      productsContainer = "lg:col-start-2 lg:row-start-1 lg:col-end-4 lg:row-end-3 grid lg:pl-4 p-6 lg:p-0";
      textConatiner = "lg:col-start-2 lg:row-start-3 lg:col-end-3 lg:pl-4 p-6 lg:p-0";
      imageGridClass = "lg:col-start-1 lg:col-end-2 row-start-1 lg:row-start-1 lg:row-end-4 row-span-1 hidden lg:block";

      break;
  }
  return (
    <section className="grid lg:grid-rows-3 lg:h-[100vh]  ">
      <div className={productsContainer}>
        <div>
          <div className={imagesContainer}>
            {productData

              .slice(slice1, slice2)
              .concat(productData.slice(slice3, slice4))
              .map((item) => (
                <ProductCard key={item.id} productImage={item.first_image} title={item.title} category={item.category} price={item.price} slugName={item.slug_name} />
              ))}
          </div>
        </div>
      </div>
      <div className={textConatiner}>
        <h2 className=" text-main_black">{header}</h2>
        <p className="md:w-[20rem] text-alternativ_black">{paragraph}</p>
      </div>
      <div className={imageGridClass}>
        <Image className=" object-cover w-full lg:w-[500]   " src={`/assets/images/${images}.jpg`} alt="hero" width={500} height={500} />
      </div>
    </section>
  );
};

export default ProductContainer;
