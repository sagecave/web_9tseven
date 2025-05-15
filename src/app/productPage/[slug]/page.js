"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBasketStore } from "../../../../globalHooks/basketProduct";
import { useStore } from "../../../../globalHooks/basketHooks";
export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const [productsData, setProductData] = useState([]);
  const { BasketSatete, update } = useBasketStore();
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[productsData[0]?.id] || 0;
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);

  const HandleUpdateProducts = () => {
    const newProducts = [
      {
        id: productsData[0]?.id,
        title: productsData[0]?.title,
        price: productsData[0]?.price,
        category: productsData[0]?.category,
        first_image: productsData[0]?.first_image,
        slug_name: productsData[0]?.slug_name,
      },
    ];
    if (quantity >= 1) {
      increaseProductNumber(productsData[0]?.id);
    } else {
      console.log("Product already in basket", quantity);
      increaseProductNumber(productsData[0]?.id);
      update(newProducts);
    }
    // increaseProductNumber(productsData[0]?.id);
    // update(newProducts);
  };
  useEffect(() => {
    async function getBandBySlug(slug) {
      const url = `https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/9TSEVEN?slug_name=eq.${slug}`;
      const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdW1ibnZmcm1zb3dkYXhydmttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjIzOTAsImV4cCI6MjA2MjYzODM5MH0.JpvYefKey3yiK285pXmaVs-tAR15E9OhoBp3bA22pKY";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: API_KEY, // 👈 add your key here
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch band data");
      }

      const data = await response.json();

      setProductData(data);
      return data;
    }
    getBandBySlug(slug);
  }, [slug]);

  return (
    <section className=" md:grid md:grid-cols-2">
      <div className="hidden md:block md:col-start-1 md:col-end-3">
        <h1 className=" text-HeaderSizeBig text-main_black">{productsData[0]?.title}</h1>
        <p className="text-ParagraphSize text-alternativ_black">bredcrum path</p>
      </div>
      <div>
        <img src={productsData[0]?.first_image} alt="Product Image" width={500} height={500} className="object-cover" />
      </div>
      <div className=" text-ParagraphSize text-main_black">
        <h2 className=" text-HeaderSizeSmall text-main_black">{productsData[0]?.title}</h2>
        <p>{productsData[0]?.price}</p>
        <p>{productsData[0]?.description}</p>
        <p>SIZES</p>

        <button className=" border-2 border-alternativ_black p-2 hover:bg-alternativ_black hover:text-main_white" onClick={HandleUpdateProducts}>
          + ADD PRODUCT
        </button>
        <p>Acordien</p>
      </div>
    </section>
  );
}

// {data.title}
