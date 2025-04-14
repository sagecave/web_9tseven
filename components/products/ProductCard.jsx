export default function ProductCards({ title, productImage }) {
  return (
    <div className="border border-primary-300 w-full rounded overflow-hidden shadow-sm">
      <img src={productImage} alt={title} className="w-full h-40 object-cover" />
      <div className="bg-primary-100 h-24 flex items-center justify-center px-2">
        <p className="text-sm text-center">{title}</p>
      </div>
    </div>
  );
}
