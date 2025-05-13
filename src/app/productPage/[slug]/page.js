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
  return (
    <div>
      <h1 className=" text-amber-300">{productsData[0]?.title}</h1>
      <p className=" text-amber-300">{productsData[0]?.price}</p>
    </div>
  );
}

// {data.title}
