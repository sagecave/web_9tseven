import { useStore } from "../../globalHooks/basketHooks";

const BasketProductCard = ({ title, id }) => {
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const decreaseProductNumber = useStore((state) => state.decreaseProductNumber);
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[id] || 1;

  return (
    <div className="flex flex-row gap-3 items-center ">
      <p>{title}</p>
      <button className="p-5 bg-amber-300" onClick={() => increaseProductNumber(id)}>
        +
      </button>
      <p>{quantity}</p>
      <button className="p-5 bg-blue-400" onClick={() => decreaseProductNumber(id)}>
        -
      </button>
    </div>
  );
};

export default BasketProductCard;
