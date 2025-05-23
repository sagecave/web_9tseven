"use client";
import ProductContainer from "../../../components/products/ProductContainer";
import ProductsLayout from "../../../layouts/ProductLayout";

export default function ProductPage() {
  return (
    <section className="mt-10">
      <h1 className="text-HeaderSizeSmall text-main_black pb-[20]">ALL PRODUCTS</h1>
      <ProductsLayout>
        <ProductContainer />
      </ProductsLayout>
    </section>
  );
}
