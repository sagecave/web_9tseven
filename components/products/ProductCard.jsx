export default function ProductCards({ title, productImage, category, price }) {
  return (
    <div className="  hover:shadow-md">
      <img src={productImage} alt={title} className="w-full h-40 object-cover" />
      <div className="pt-4 pr-3 pl-3 pb-4">
        <p className="text-HeaderSizeSmall font-bold text-main_black">{title}</p>
        <p className="text-ParagraphSize text-neutral_black">{category}</p>
        <p className="text-ParagraphSize text-neutral_black">{price}</p>
      </div>
    </div>
  );
}
