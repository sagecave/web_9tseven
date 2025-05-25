"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBasketStore } from "../../../../globalHooks/basketProduct";
import { useStore } from "../../../../globalHooks/basketHooks";
import { animate, motion, MotionValue, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";

export default function SingleProductPage() {
  const params = useParams();
  const slug = params.slug;
  const [productsData, setProductData] = useState([]);
  const { BasketSatete, update } = useBasketStore();
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[productsData[0]?.id] || 0;
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const increaseAllProductNumber = useStore((state) => state.increaseAllProductNumber);

  const quantatityAndPriceCalculater = useStore((state) => state.quantatityAndPriceCalculater);

  const HandleUpdateProducts = () => {
    const newProducts = [
      {
        id: productsData[0]?.id,
        item: productsData[0]?.item,
        title: productsData[0]?.title,
        price: productsData[0]?.price,
        category: productsData[0]?.category,
        first_image: productsData[0]?.first_image,
        slug_name: productsData[0]?.slug_name,
        quantity: quantity,
      },
    ];
    if (quantity >= 1) {
      increaseProductNumber(productsData[0]?.id);
      increaseAllProductNumber();
    } else {
      console.log("Product already in basket", quantity);
      increaseProductNumber(productsData[0]?.id);
      increaseAllProductNumber();
      update(newProducts);
    }
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

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  // const maskImage = useScrollOverflowMask(scrollXProgress);
  // const left = `0%`;
  // const right = `100%`;
  // const leftInset = `20%`;
  // const rightInset = `80%`;
  // const transparent = `#0000`;
  // const opaque = `#0000`;

  function useScrollOverflowMask(scrollXProgress) {
    // const maskImage = useMotionValue(`linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`);

    useMotionValueEvent(scrollXProgress, "change", (value) => {
      console.log("scrollXProgress", value);
      console.log("scrollXProgress2", scrollXProgress);
      if (value === 0) {
        // animate(maskImage, `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`);
      } else if (value === 1) {
        // animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`);
      } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
        // animate(maskImage, `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`);
      }
    });

    return maskImage;
  }

  const images = [productsData[0]?.ModelProductImage, productsData[0]?.ModelProductImage2, productsData[0]?.ModelProductImage3, productsData[0]?.first_image, productsData[0]?.secound_image].filter(Boolean);

  return (
    <section className="  grid col-start-2 col-end-3  mt-35 md:mt-25">
      <div className="hidden md:block pb-12 md:col-start-1 md:col-end-3">
        <h1 className=" text-HeaderSizeBig text-main_black">{productsData[0]?.title}</h1>
        <p className="text-ParagraphSize text-alternativ_black">bredcrum path</p>
      </div>

      <div id="example" className="relative w-[100vw] max-w-[500px] bottom-10">
        <motion.ul className="flex overflow-x-scroll gap-10" ref={ref}>
          {images.map((image, index) => (
            <li key={index} className={`w-[500px] snap-x snap-mandatory `}>
              <img src={image} alt={`Product Image ${index + 1}`} width={500} height={500} className="object-cover max-w-none" />
            </li>
          ))}
        </motion.ul>
      </div>
      <div className=" text-ParagraphSize text-main_black md:ml-6 md:w-[70%] md:relative md:top-[-45px]">
        <h2 className=" text-HeaderSizeSmall text-main_black">{productsData[0]?.title}</h2>
        <p>{productsData[0]?.price} kr</p>
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

// /**
//  * ==============   Styles   ================
//  */

// function StyleSheet() {
//   return (
//     <style>{`
//             #example {
//               width: 100vw;
//               max-width: 400px;
//               position: relative;
//             }

//             #example #progress {
//                 position: absolute;
//                 top: -65px;
//                 left: -15px;
//                 transform: rotate(-90deg);
//             }

//             #example .bg {
//                 stroke: #0b1011;
//             }

//             #example #progress circle {
//                 stroke-dashoffset: 0;
//                 stroke-width: 10%;
//                 fill: none;
//             }

//             #progress .indicator {
//                 stroke: var(--accent);
//             }

//             #example ul {
//                 display: flex;
//                 list-style: none;
//                 height: 220px;
//                 overflow-x: scroll;
//                 padding: 20px 0;
//                 flex: 0 0 600px;
//                 margin: 0 auto;
//                 gap: 20px;
//             }

//             #example ::-webkit-scrollbar {
//                 height: 5px;
//                 width: 5px;
//                 background: #fff3;
//                 -webkit-border-radius: 1ex;
//             }

//             #example ::-webkit-scrollbar-thumb {
//                 background: var(--accent);
//                 -webkit-border-radius: 1ex;
//             }

//             #example ::-webkit-scrollbar-corner {
//                 background: #fff3;
//             }

//             #example li {
//                 flex: 0 0 200px;
//                 background: var(--accent);
//             }

//     `}</style>
//   );
// }

// // {data.title}
