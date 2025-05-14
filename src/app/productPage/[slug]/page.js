"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const [productsData, setProductData] = useState([]);
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
      console.log("DATA CHECK kommer den?", data);
      setProductData(data);
      return data;
    }
    getBandBySlug(slug);
  }, [slug]);

  console.log("PARAMS CHECK WORK?", params.slug);
  console.log("PRODUCTDATA CHECK WORK?", productsData);
  function addToBasket() {
    console.log("Add to basket clicked");
    console.log("Product data:", productsData);
  }
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
        <button onClick={addToBasket} className=" border-2 border-alternativ_black p-2 hover:bg-alternativ_black hover:text-main_white">
          + ADD PRODUCT
        </button>
        <p>Acordien</p>
      </div>
    </section>
  );
}

// {data.title}
