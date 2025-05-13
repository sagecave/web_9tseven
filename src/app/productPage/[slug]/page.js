import { getProductSlug } from "../../../../api/products";

const SingleProductPage = async ({ params }) => {
  const { slug } = await params;
  const data = await getProductSlug(slug);

  return (
    <>
      <main>
        <p>Hej</p>
        <p>{data.name}</p>
      </main>
    </>
  );
};

export default SingleProductPage;
// export default function SingleProductPage() {
//   return (
//     <div>
//       <h1 className=" text-amber-300">ME LOL</h1>
//     </div>
//   );
// }

// getProductSlug
