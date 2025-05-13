"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductSlug } from "../../../../api/products";

export default function ProductDetails({ slug }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productSlug", slug],
    queryFn: () => getProductSlug(slug), // Pass the slug to the function
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data[0]?.title}</h1>
      <p>{data[0]?.description}</p>
      <p>Price: ${data[0]?.price}</p>
    </div>
  );
}

// export default function SingleProductPage() {
//   return (
//     <div>
//       <h1 className=" text-amber-300">ME LOL</h1>
//     </div>
//   );
// }

// getProductSlug
