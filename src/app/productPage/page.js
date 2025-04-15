import { createRoute, useQuery } from "@tanstack/react-router";

// Define the route for individual product
const productRoute = createRoute({
  path: "/products/:productId",
  loader: async ({ params }) => {
    const response = await fetch(`https://api.example.com/products/${params.productId}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    return response.json();
  },
  component: ProductPage,
});

// Component to display the product details
function ProductPage() {
  const { productId } = useParams();
  const { data, error, isLoading } = useQuery(["product", productId], () => fetch(`https://api.example.com/products/${productId}`).then((res) => res.json()));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
}
