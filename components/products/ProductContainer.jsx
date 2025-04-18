// components/ProductsContainer.jsx
"use client";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../api/products";

export default function ProductsContainer() {
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
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {productData.map((item) => (
        <ProductCard key={item.id} productImage={item.thumbnail} title={item.title} />
      ))}
    </div>
  );
}
