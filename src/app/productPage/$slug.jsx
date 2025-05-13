import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});
export default function SingleProductPage() {
  return (
    <div>
      <h1 className=" text-amber-300">Hello/productPage/id</h1>
    </div>
  );
}
