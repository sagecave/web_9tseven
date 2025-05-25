import Link from "next/link";

export default function ProductCards({ title, productImage, category, price, slugName }) {
  return (
    <Link key={slugName} href={`/productPage/${slugName}`}>
      <div className="hover:shadow-md">
        <img src={productImage} alt={title} className="w-full object-contain sm:h-60 " />
        <div className="pt-4 pr-3 pl-3 pb-4">
          <p className="text-HeaderSizeSmall font-bold text-main_black">{title}</p>
          <p className="text-ParagraphSize text-neutral_black">{category}</p>
          <p className="text-ParagraphSize text-neutral_black">{price}</p>
        </div>
      </div>
    </Link>
  );
}
